const Joi = require('@hapi/joi');

module.exports.createPesquisaSchema = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required(),
    quemTeAtendeu: Joi.string().required(),
    notaAtendimento: Joi.number().required(),
    voltariaFazerNegocio: Joi.boolean().required(),
    indicariaParaAmigo: Joi.boolean().required()
});
