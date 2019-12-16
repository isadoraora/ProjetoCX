const Pesquisa = require('../database/models/pesquisaModel')
// const Cliente = require('../database/models/clienteModel')
// const Analista = require('../database/models/analistaModel')
const { formatMongoData } = require('../helper/dbHelper')
const bcryptjs = require('bcryptjs')
const constants = require('../constants')

module.exports.createPesquisa = async (serviceData) => {
    try {
        let pesquisa = new Pesquisa({ ...serviceData })
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
        const nota = await Pesquisa.find({ quemTeAtendeu }, { notaAtendimento: 1 })
        const calculaNota = await Pesquisa.aggregate([
            { $match: { quemTeAtendeu: quemTeAtendeu } },
            {
                $group:
                {
                    "_id": quemTeAtendeu,
                    Media: { $avg: "$notaAtendimento" },
                    QtidadePesquisas: { $sum: 1 }
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
module.exports.getMediaAnalistas = async function () {
    try {
        const calculaMedia = await Pesquisa.aggregate([
            {
                "$group": {
                    "_id": "$quemTeAtendeu",
                    "Media": { $avg: "$notaAtendimento" },
                    "QtdadePesquisas": { "$sum": 1 }
                }

            }
        ])
        return calculaMedia
    } catch (error) {
        console.log('Algo deu errado: Service : getMediaAnalistas', error)
        throw new Error(error)
    }
}

       // const cliente = await Cliente.findOne({ email })
        // if (!cliente) {
        //     throw new Error(constants.clienteAnalistaMessage.CLIENT_NOT_FOUND);
        // }
        // const isValid = await bcryptjs.compare(email, cliente.email)
        // if (isValid) {
        //     throw new Error(constants.clienteAnalistaMessage.INVALID_EMAIL)
        // }
        // const analista = await Pesquisa.findOne({ user })
        //  console.log(analista)
        // if (!analista) {
        //     throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        // }
        // const isAnalistaValid = await bcryptjs.compare(quemTeAtendeu, analista.user)
        // if (!isAnalistaValid) {
        //     throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        // }