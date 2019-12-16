const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');
const tokenValidation = require('../middleware/tokenValidation');

//creating pesquisa
router.post('/',
    tokenValidation.validateToken,
    pesquisaController.createPesquisa);
/**
 * @api {post} /pesquisa Create pesquisa from client
 * @apiGroup Pesquisa
 * @apiParam (Request Body) {String} email E-mail do cliente.
 * @apiParam (Request Body) {String} senha Senha do cliente.
 * @apiParam (Request Body) {String} quemTeAtendeu usuário do analista que realizou o atendimento.
 * @apiParam (Request Body) {Number} notaAtendimento Nota do atendimento.
 *  @apiParam (Request Body) {Boolean} voltariaFazerNegocio Sim ou não.
 * @apiParam (Request Body) {Boolean} indicariaParaAmigo Sim ou não.
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Pesquisa criada com sucesso!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Campos inválidos!",
 *     }
 */

//get Nota de todos os analistas 
router.get('/notas', pesquisaController.getMediaAnalistas);
/**
 * @api {get} /pesquisa/notas Get media from analists
 * @apiGroup Pesquisa
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
    "body": [
        {
            "_id": "5df07cdd5451f923cce6499f",
            "Nome": "João",
            "Nota": 10
        },
        {
            "_id": "5df07cdd5451f923cce6499f",
            "Nome": "Andressa",
            "Nota": 9.5
        }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Campos inválidos!",
 *     }
 */


//get pesquisa de um analista pelo 'quemTeAtendeu'
router.get('/:quemTeAtendeu', pesquisaController.getAnalistaByNameFromPesquisa)
/**
 * @api {get} /pesquisa/:quemTeAtendeu Get pesquisas from that analist
 * @apiGroup Pesquisa
* @apiParam {:quemTeAtendeu} user being evaluated
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "Atendente localizado com sucesso!",
    "body": [
        {
            "email": "isadoraoliveira@gmail.com",
            "senha": "123456",
            "quemTeAtendeu": "João",
            "notaAtendimento": 10,
            "voltariaFazerNegocio": true,
            "indicariaParaAmigo": true,
            "createdAt": "2019-12-11T05:21:33.669Z",
            "updatedAt": "2019-12-11T05:21:33.669Z",
            "__v": 0,
            "id": "5df07cdd5451f923cce6499f"
        }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Campos inválidos!",
 *     }
 */

//get nota do analista
router.get('/:quemTeAtendeu/nota', pesquisaController.getNotaFromAnalista);
/**
 * @api {get} /pesquisa/:quemTeAtendeu/nota Get media from analists
 * @apiGroup Pesquisa
  * @apiParam {:quemTeAtendeu} user being evaluated
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
    "body": [
        {
            "_id": "João",
            "Media": 10,
            "quantidadePesquisas": 3
        }
    ]
}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Campos inválidos!",
 *     }
 */

module.exports = router;