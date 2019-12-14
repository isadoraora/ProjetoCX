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
 * @api {get} /pesquisa/notas Get notas from analists
 * @apiGroup Pesquisa
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
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
 *     {
    "status": 200,
    "message": "Atendente localizado com sucesso!",
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
 *     {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
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