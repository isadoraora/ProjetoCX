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

module.exports.getNotaFromAnalista = async ({ quemTeAtendeu, notaAtendimento }) => {
    try {

        let analista = await Pesquisa.find({ quemTeAtendeu })
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        }
        const nota = await Pesquisa.find({ quemTeAtendeu }, { notaAtendimento: 1 })
        const somaNota = await Pesquisa.aggregate([
            {
                $group:
                {
                    _id: quemTeAtendeu,
                    total: {
                        $sum: "$notaAtendimento"
                    },
                    count: { $sum: 1 }
                }
            }
        ])
        return somaNota;

    } catch (error) {
        console.log('Something went wrong: Service : getNotaFromAnalista', error)
        throw new Error(error)
    }

}

