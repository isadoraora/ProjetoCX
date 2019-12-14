const express = require('express');
const router = express.Router();
const analistaController = require('../controllers/analistaController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const analistaSchema = require('../apiSchema/analistaSchema');

router.post('/signup',
    joiSchemaValidation.validateBody(analistaSchema.signup),
    analistaController.signup
);
/**
 * @api {post} /analista/signup
 * @apiGroup Analista
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Signup com sucesso!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Error: Este email já está sendo utilizado",
 *     }
 */

router.post('/login',
    joiSchemaValidation.validateBody(analistaSchema.login),
    analistaController.login
);

/**
 * @api {post} /analista/login
 * @apiGroup Analista
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Login com sucesso!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 USER_NOT_FOUND
 *  {
    "status": 400,
    "message": "Error: Analista não localizado",
 *     }
 */

//Retrieving all cadastros
router.get('/', analistaController.getAllAnalists);

/**
 * @api {get} /analista Retorna todos
 * @apiGroup Analista
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
 */


//Retrieve only one specific analist by user
router.get('/:user', analistaController.getAnalistByUser);
/**
 * @api {get} /analista/:user Get user login
 * @apiGroup Analista
 * @apiParam {:user} Users.
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
 *     HTTP/1.1 400 USER_NOT_FOUND
 *  {
    "status": 400,
    "message": "Error: Analista não localizado!",
 *     }
 */

//Update analist by ID
router.put('/:id', analistaController.updateAnalist);
/**
 * @api {put} /analista/:id Update user info
 * @apiGroup Analista
 * @apiParam {:id} id Users unique ID.
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Analista atualizado com sucesso!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 ID_INVALID
 *  {
    "status": 400,
    "message": "Error: ID inválido!",
 *     }
 */


//Deleting a cadastro by ID from mongoDB
router.delete('/:id', analistaController.deleteAnalist);

/**
 * @api {delete} /analista/:id Delete analist information
 * @apiName deteleAnalist
 * @apiGroup Analista
 *
 * @apiParam {:id} id Users unique ID.
  *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "message": "Analista deletado!",
 *     }
 *
 * @apiError IdNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "ID inválido"
 *     }
 */


module.exports = router;