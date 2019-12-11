const Analista = require('../database/models/analistaModel');
const constants = require('../constants');
const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
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
        console.log(analista.password)
        const isValid = await bcryptjs.compare(password, analista.password)
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
module.exports.getAllAnalists = async ({ skip = 0, limit = 10 }) => {
    try {
        let analista = await Analista.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(analista);
    } catch (error) {
        console.log('Algo deu errado: Serviço: getAllAnalists', error)
        throw new Error(error)
    }
}
module.exports.getAnalistByUser = async ({ user }) => {
    try {

        let analista = await Analista.findOne({ user })
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_NOT_FOUND)
        }
        return formatMongoData(analista);
    } catch (error) {
        console.log('Something went wrong: Service : getAnalistByUser', error)
        throw new Error(error)
    }

}

module.exports.updateAnalist = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let analista = await Analista.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_UPDATED)
        }
        return formatMongoData(analista);
    } catch (error) {
        console.log('Something went wrong: Service : updateAnalist', error)
        throw new Error(error)
    }

}

module.exports.deleteAnalist = async ({ id }) => {
    try {
        checkObjectId(id);
        let analista = await Analista.findByIdAndDelete(id);
        if (!analista) {
            throw new Error(constants.clienteAnalistaMessage.USER_DELETED)
        }
        return formatMongoData(analista);
    } catch (error) {
        console.log('Algo deu errado: Service : deleteAnalist', error)
        throw new Error(error)
    }

}