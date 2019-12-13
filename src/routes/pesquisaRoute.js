const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');
const tokenValidation = require('../middleware/tokenValidation');

//creating pesquisa
router.post('/', 
tokenValidation.validateToken,
pesquisaController.createPesquisa);

//get Media de todos os analistas 
router.get('/notas', pesquisaController.getMediaAnalistas);

//get pesquisa de um analista pelo 'quemTeAtendeu'
router.get('/:quemTeAtendeu', pesquisaController.getAnalistaByNameFromPesquisa)

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