const Cliente = require('../database/models/clienteModel');
const constants = require('../constants');
const clienteService = require('../service/clienteService');

exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.signup(req.body)
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: signup ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}

exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.login(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: login ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
//Returning all cadastros
exports.findAll = (req, res) => {
    Cliente.find()
        .then(cliente => {
            res.send(cliente)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

// //Finding a single cadastro by ID(do Mongo, tratado)
exports.getClientById = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.getClientById(req.params);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENTE_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log("Algo deu errrado: Controller: getClientById", error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}

//Updating by ID
exports.updateClient = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.updateClient({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENT_UPDATED;
        response.body = responseFromService;
    } catch (error) {
        console.log("Algo deu errado: Controller: updateClient", error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}

//Delete client by ID
exports.deleteClient = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.deleteClient(req.params)
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.CLIENT_DELETED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: deleteClient', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);
}