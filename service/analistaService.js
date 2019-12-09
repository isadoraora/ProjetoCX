const Analista = require('../database/models/analistaModel');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({ user, password }) => {
    try {
        const analista = await Analista.findOne({ user })
        if (analista) {
            throw new Error(constants.clienteAnalistaMessage.DUPLICATE_EMAIL);
        }
        password = await bcryptjs.hash(password, 12);
        const newAnalista = new Analista({ user, password });
        let result = await newAnalista.save();

        return formatMongoData(result);
    } catch (error) {
        console.log(`Algo deu errado: Serviço: signup`, error)
        throw new Error(error);
    }
}

module.exports.login = async ({ user, password }) => {
    try {
        const analista = await Analista.findOne({ user })
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND);
        }
        const isValid = await bcryptjs.compare(password, user.password)
        if (!isValid) {
            throw new Error(constants.clienteAnalistaMessage.INVALID_PASSWORD)
        }
        const token = jwt.sign({ id: analista._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1d' });
        return { token };

    } catch (error) {
        console.log(`Algo deu errado: Serviço: login`, error)
        throw new Error(error);
    }
}