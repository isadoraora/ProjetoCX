const Pesquisa = require('../database/models/pesquisaModel');
const constants = require('../constants');
const pesquisaService = require('../service/pesquisaService');

module.exports.createPesquisa = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await pesquisaService.createPesquisa(req.body);
        response.status = 200,
            response.message = constants.pesquisaMessage.PESQUISA_CREATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: createPesquisa ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
//get Analista por nome
module.exports.getAnalistaByNameFromPesquisa = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await pesquisaService.getAnalistaByNameFromPesquisa(req.params);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.USER_FOUND;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: getAnalistaByNameFromPesquisa ', error)
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}
// //get notas a partir de nome
module.exports.getNotaFromAnalista = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await pesquisaService.getNotaFromAnalista(req.params);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENTE_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log("Algo deu errado: Controller: getNotaFromAnalista", error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}

//get media de todos analistas
module.exports.getMediaAnalistas = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await pesquisaService.getMediaAnalistas(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENTE_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log("Algo deu errado: Controller: getMediaAnalistas", error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}
