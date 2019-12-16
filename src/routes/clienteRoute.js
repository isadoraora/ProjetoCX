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
    "body": {
        "result": {
            "_id": "5df6788b2e9c39173828be74",
            "email": "teachersil@gmail.com",
            "senha": "$2a$12$ms/IJVCK./gO7HQSGbxIL.E6wMHvUuhioRZnarYe.uXf/9GfO2lSS",
            "createdAt": "2019-12-15T18:16:43.123Z",
            "updatedAt": "2019-12-15T18:16:43.123Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzY0MzM4MDQsImV4cCI6MTU3NjUyMDIwNH0.xd0fDwSn-FV55OBA-qEQRC375Ur8r1TLLsPAVef2Mi8"
    }
}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 DUPLICATE_EMAIL
 *  {
    "status": 400,
    "message": "Error: Este email já está sendo utilizado",
 *     }
@apiErrorExample Error-Response:
 *     HTTP/1.1 400 Campo vazio
 {
    "status": 400,
    "message": "Campos inválidos.",
    "body": [
        {
            "error": "\"senha\" is not allowed to be empty",
            "path": [
                "senha"
            ]
        }
    ]
}
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
 *    {
    "status": 200,
    "message": "Login com sucesso!",
    "body": {
        "cliente": {
            "_id": "5df677ae7bb79d1f841dd773",
            "email": "cthomaz@gmail.com",
            "senha": "$2a$12$fEmL1fyA5SU7fBiCmb4Y2Om.GTuuZqkFGU.cWbTZ2SyS5OmzwgmbS",
            "createdAt": "2019-12-15T18:13:02.502Z",
            "updatedAt": "2019-12-15T18:13:02.502Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjY3N2FlN2JiNzlkMWY4NDFkZDc3MyIsImlhdCI6MTU3NjQzMzY1MSwiZXhwIjoxNTc2NTIwMDUxfQ.TgkEXc93IyXluBaLOrVryI0o6UIXMSFL-DdZU_HVS9U"
    }
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
    "message": "Cliente atualizado!",
    "body": {
        "email": "ameixa@gmail.com",
        "createdAt": "2019-12-15T18:09:47.716Z",
        "updatedAt": "2019-12-15T18:20:50.126Z",
        "__v": 0,
        "id": "5df676eb7bb79d1f841dd76e"
    }
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
 *    {
    "status": 200,
    "message": "Cliente deletado!",
    "body": {
        "email": "pedro@gmail.com",
        "createdAt": "2019-12-15T18:08:18.135Z",
        "updatedAt": "2019-12-15T18:08:18.135Z",
        "__v": 0,
        "id": "5df67692dd6532113cbb7af6"
    }
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
