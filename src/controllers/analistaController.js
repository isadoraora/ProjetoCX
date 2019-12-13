const Analista = require('../database/models/analistaModel');
const constants = require('../constants');
const analistaService = require('../service/analistaService');

module.exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.signup(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: signup ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}

module.exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.login(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: login ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
exports.getAllAnalists = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.getAllAnalists(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENTE_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: createAnalist', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}
module.exports.getAnalistByUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.getAnalistByUser(req.params);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENTE_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: getAnalistByUser ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
module.exports.updateAnalist = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.updateAnalist({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.USER_UPDATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: updateAnalist ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}

module.exports.deleteAnalist = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await analistaService.deleteAnalist(req.params);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.USER_DELETED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: deleteAnalist', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}