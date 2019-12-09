const Cliente = require('../database/models/clienteModel');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({ email, senha }) => {
    try {
        const cliente = await Cliente.findOne({ email })
        if (cliente) {
            throw new Error(constants.clienteAnalistaMessage.DUPLICATE_EMAIL);
        }
        senha = await bcryptjs.hash(senha, 12);
        const newCliente = new Cliente({ email, senha });
        let result = await newCliente.save();

        return formatMongoData(result);
    } catch (error) {
        console.log(`Algo deu errado: Serviço: signup`, error)
        throw new Error(error);
    }
}

module.exports.login = async ({ email, senha }) => {
    try {
        const cliente = await Cliente.findOne({ email })
        if (!cliente) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND);
        }
        const isValid = await bcryptjs.compare(senha, cliente.senha)
        if (!isValid) {
            throw new Error(constants.clienteAnalistaMessage.INVALID_PASSWORD)
        }
        const token = jwt.sign({ id: cliente._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1d' });
        return { token };

    } catch (error) {
        console.log(`Algo deu errado: Serviço: login`, error)
        throw new Error(error);
    }
}