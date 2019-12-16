const Cliente = require('../database/models/clienteModel');
const constants = require('../constants');
const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function generateToken(params = {}) {
    return jwt.sign(params, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '7d' });
}

module.exports.signup = async ({ email, senha }) => {
    try {
        const cliente = await Cliente.findOne({ email })
        if (cliente) {
            throw new Error(constants.clienteAnalistaMessage.DUPLICATE_EMAIL);
        }
        senha = await bcryptjs.hash(senha, 12);
        const newCliente = new Cliente({ email, senha });
        let result = await newCliente.save();

        return ({
            result,
            token: generateToken()
        })
    } catch (error) {
        console.log(`Algo deu errado: Serviço: signup`, error)
        throw new Error(error);
    }
}

module.exports.login = async ({ email, senha }) => {
    try {
        const cliente = await Cliente.findOne({ email })
        if (!cliente) {
            throw new Error(constants.clienteAnalistaMessage.CLIENT_NOT_FOUND);
        }
        const isValid = await bcryptjs.compare(senha, cliente.senha)
        if (!isValid) {
            throw new Error(constants.clienteAnalistaMessage.INVALID_PASSWORD)
        }
        return ({ cliente, token: generateToken({ id: cliente._id }) })
    } catch (error) {
        console.log(`Algo deu errado: Serviço: login`, error)
        throw new Error(error);
    }
}
module.exports.getClientById = async ({ id }) => {
    try {
        checkObjectId(id)
        let cliente = await Cliente.findById(id);
        if (!cliente) {
            throw new Error(constants.clienteAnalistaMessage.CLIENT_NOT_FOUND)
        }
        return formatMongoData(cliente);
    } catch (error) {
        console.log('Algo deu errado: Service: getClientById', error)
        throw new Error(error)
    }
}
module.exports.updateClient = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id)
        let cliente = await Cliente.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!cliente) {
            throw new Error(constants.clienteAnalistaMessage.CLIENT_NOT_UPDATED)
        }
        return formatMongoData(cliente);
    } catch (error) {
        console.log("Algo deu errado: Service: updateClient", error)
        throw new Error(error)
    }
}
module.exports.deleteClient = async ({ id }) => {
    try {
        checkObjectId(id)
        let cliente = await Cliente.findByIdAndDelete(id);
        if (!cliente) {
            throw new Error(constants.clienteAnalistaMessage.CLIENT_DELETED)
        }
        return formatMongoData(cliente);
    } catch (error) {
        console.log('Algo deu errado: Service: deleteClient', error)
        throw new Error(error)
    }
}