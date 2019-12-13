const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');

//creating pesquisa
router.post('/', pesquisaController.createPesquisa);

//get pesquisa de um analista pelo 'quemTeAtendeu'
router.get('/:quemTeAtendeu', pesquisaController.getAnalistaByNameFromPesquisa)

//get Media de todos os analistas 
router.get('/nota', pesquisaController.getMediaAnalistas);

//get nota do analista
router.get('/:quemTeAtendeu/nota', pesquisaController.getNotaFromAnalista);


/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

module.exports = router;