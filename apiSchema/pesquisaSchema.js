const Joi = require('@hapi/joi');

module.exports.createPesquisaSchema = Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required(),
    quemTeAtendeu: Joi.string().required(),
    canalAtendimento: Joi.string().required(),
    notaAtendimento: Joi.number().required(),
    voltariaFazerNegocio: Joi.boolean().required(),
    indicariaParaAmigo: Joi.boolean().required()
});

module.exports.updatePesquisaSchema = Joi.object().keys({
    email: Joi.string(),
    senha: Joi.string(),
    quemTeAtendeu: Joi.string(),
    canalAtendimento: Joi.string(),
    notaAtendimento: Joi.number(),
    voltariaFazerNegocio: Joi.boolean(),
    indicariaParaAmigo: Joi.boolean()
});
