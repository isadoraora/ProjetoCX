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
 * @apiParam (Request Body) {String} email E-mail do cliente.
 * @apiParam (Request Body) {String} senha Senha do cliente.
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
 * @apiParam (Request Body) {String} email E-mail do cliente.
 * @apiParam (Request Body) {String} senha Senha do cliente.
 *
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
 * @api {get} /cliente 
 * @apiGroup Cliente
 *
 * @apiSuccess {String} clientes Lista de clientes cadastrados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
        "_id": "5defe26c88f2170290ebab8d",
        "email": "maedaisa@gmail.com",
        "senha": "$2a$12$XPf.ccrEqxuTQKqi/YfCOOaE9u/XSj/s6Xp5G3BMq.vC0cd/aDxR6",
        "createdAt": "2019-12-10T18:22:36.420Z",
        "updatedAt": "2019-12-10T18:22:36.420Z",
        "__v": 0
    },
 *
 */

//Finding Client byId
router.get('/:id', clienteController.getClientById)
/**
 * @api {get} /analista/:id Get client id
 * @apiGroup Cliente
 * @apiParam {:id} id Client unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
    "body": {
        "email": "maedaisa@gmail.com",
        "createdAt": "2019-12-10T18:22:36.420Z",
        "updatedAt": "2019-12-10T18:22:36.420Z",
        "__v": 0,
        "id": "5defe26c88f2170290ebab8d"
    }
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
 * @apiParam (Request Body) {String} email E-mail do cliente.
 * @apiParam (Request Body) {String} senha Senha do cliente.
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
 * @apiParam (Request Body) {String} email E-mail do cliente.
 * @apiParam (Request Body) {String} senha Senha do cliente.
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
