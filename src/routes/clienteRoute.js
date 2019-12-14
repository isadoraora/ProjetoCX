const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const clienteSchema = require('../apiSchema/clienteSchema');

//signup route validation
router.post('/signup',
    joiSchemaValidation.validateBody(clienteSchema.signup),
    clienteController.signup
);
/**
 * @api {post} /cliente/signup
 * @apiGroup Cliente
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

//login route validated
router.post('/login',
    joiSchemaValidation.validateBody(clienteSchema.login),
    clienteController.login
);
/**
 * @api {post} /cliente/login
 * @apiGroup Cliente
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
 *     HTTP/1.1 400 CLIENT_NOT_FOUND
 *  {
    "status": 400,
    "message": "Error: Cliente não localizado",
 *     }
 */


//Retrieving all cadastros
router.get('/', clienteController.findAll)

/**
 * @api {get} /cliente Retorna todos
 * @apiGroup Cliente
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

//Finding Client byId
router.get('/:id', clienteController.getClientById)
/**
 * @api {get} /analista/:id Get client id
 * @apiGroup Cliente
 * @apiParam {:id} id Client unique ID.
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
 *     HTTP/1.1 400 CLIENT_NOT_FOUND
 *  {
    "status": 400,
    "message": "Error: Cliente não localizado!",
 *     }
 */

//updating client ById
router.put('/:id', clienteController.updateClient)
/**
 * @api {put} /cliente/:id Update client info
 * @apiGroup Cliente
 * @apiParam {:id} id Client unique ID.
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Cliente atualizado com sucesso!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 ID_INVALID
 *  {
    "status": 400,
    "message": "Error: ID inválido!",
 *     }
 */


//delete client byID
router.delete('/:id', clienteController.deleteClient)
/**
 * @api {delete} /cliente/:id Delete client info
 * @apiGroup Cliente
 * @apiParam {:id} id Client unique ID.
 * @apiSuccess {String} status Mensagem de acesso autorizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Cliente deletado!",
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 ID_INVALID
 *  {
    "status": 400,
    "message": "Error: ID inválido!",
 *     }
 */


module.exports = router;
