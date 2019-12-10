const Joi = require('@hapi/joi');

module.exports.signup = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required(),
    nome: Joi.string().required(),
    cpf: Joi.number().required()
});

module.exports.login = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required(),
    nome: Joi.string().required(),
    cpf: Joi.number().required()
});