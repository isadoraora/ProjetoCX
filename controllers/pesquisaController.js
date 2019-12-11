const Pesquisa = require('../database/models/pesquisaModel');
const constants = require('../constants');
const pesquisaService = require('../service/pesquisaService');

module.exports.createPesquisa = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await pesquisaService.createPesquisa(req.body);
        response.status = 200,
            response.message = constants.pesquisaMessage.PESQUISA_CREATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: createPesquisa ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
//preciso verificar se o analisa recebeu nota, se sim, somar todas e dividir pela quantidade. Então retorno a media
//se o cara não teve nota nenhuma aparece como Sem Avaliações
//rodar o cron