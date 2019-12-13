const Pesquisa = require('../database/models/pesquisaModel')
const { formatMongoData } = require('../helper/dbHelper')
const constants = require('../constants')

module.exports.createPesquisa = async (serviceData) => {
    try {
        let pesquisa = new Pesquisa({ ...serviceData });
        let result = await pesquisa.save();
        return formatMongoData(result);
    } catch (error) {
        console.log('Algo deu errado: Service : createPesquisa', error)
        throw new Error(error)
    }

}
module.exports.getAnalistaByNameFromPesquisa = async ({ quemTeAtendeu }) => {
    try {
        let pesquisa = await Pesquisa.find({ quemTeAtendeu })
        if (!pesquisa) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        }
        return formatMongoData(pesquisa);
    } catch (error) {
        console.log('Algo deu errado: Service : getAnalistaByNameFromPesquisa', error)
        throw new Error(error)
    }

}

//get nota de um analista passando o nome dele como params
module.exports.getNotaFromAnalista = async ({ quemTeAtendeu, notaAtendimento }) => {
    try {

        let analista = await Pesquisa.find({ quemTeAtendeu })
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        }
        const nota = await Pesquisa.find({ quemTeAtendeu }, { notaAtendimento: 1 })
        const calculaNota = await Pesquisa.aggregate([
            { $match: { quemTeAtendeu: quemTeAtendeu } },
            {
                $group:
                {
                    _id: quemTeAtendeu,
                    Media: { $avg: "$notaAtendimento" },
                    quantidadePesquisas: { $sum: 1 }
                }
            }
        ])
        return calculaNota;

    } catch (error) {
        console.log('Algo deu errado: Service : getNotaFromAnalista', error)
        throw new Error(error)
    }

}
//get media de cada analista 
module.exports.getMediaAnalistas = async ({ quemTeAtendeu, notaAtendimento }) => {
    try {
        const pesquisa = await Pesquisa.aggregate([
            {
                $project: {
                    Nome: "$quemTeAtendeu",
                    Nota:{$avg: "$notaAtendimento"}
                }
            }
        ])
        return pesquisa;
    } catch (error) {
        console.log('Algo deu errado: Service : getNotaFromAnalistas', error)
        throw new Error(error)
    }

}
// const atendente = await Pesquisa.distinct("quemTeAtendeu" )
//         return atendente;