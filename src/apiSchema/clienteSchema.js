const Joi = require('@hapi/joi');

module.exports.signup = Joi.object().keys({
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    email: Joi.string().required(),
    senha: Joi.string().required()
});

module.exports.login = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required()
});

module.exports.getAllClients = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required()
})