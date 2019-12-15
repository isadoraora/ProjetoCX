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
 * @apiParam (Request Body) {String} user User do analista.
 * @apiParam (Request Body) {String} password Password do analista.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": 200,
    "message": "Signup com sucesso!",
    "body": {
        "result": {
            "_id": "5df57d28832b5a2c74360efb",
            "email": "marcio@gmail.com",
            "senha": "$2a$12$.eqJuc7brYzyYHHinw3nU.fpsUaaa7623ESvAGhEW.3Z4qA6wsqy6",
            "createdAt": "2019-12-15T00:24:08.309Z",
            "updatedAt": "2019-12-15T00:24:08.309Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYzNjk0NDgsImV4cCI6MTU3NjQ1NTg0OH0.WZ5CoP4gGdomTj7AbOVwLwSYw5iRhCALimdzw7fjZdQ"
    }
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
 *   {
    "status": 200,
    "message": "Login com sucesso!",
    "body": {
        "cliente": {
            "_id": "5df57d28832b5a2c74360efb",
            "email": "marcio@gmail.com",
            "senha": "$2a$12$.eqJuc7brYzyYHHinw3nU.fpsUaaa7623ESvAGhEW.3Z4qA6wsqy6",
            "createdAt": "2019-12-15T00:24:08.309Z",
            "updatedAt": "2019-12-15T00:24:08.309Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjU3ZDI4ODMyYjVhMmM3NDM2MGVmYiIsImlhdCI6MTU3NjM2OTU3NSwiZXhwIjoxNTc2NDU1OTc1fQ.1M8M80HFoYKgP7-gqNKchEparCM-vBNcOC25KRrVjPc"
    }
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
 * @api {get} /analista 
 * @apiGroup Analista
 *
 * @apiSuccess {String} analista Lista de analistas cadastrados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "user": "isadoraora",
            "password": "$2a$12$YmDriNGLoK1Js4of9rS7ZePqh/NKFL5.yt1vljVI/zinHTFjn3LAO",
            "createdAt": "2019-12-11T04:56:51.805Z",
            "updatedAt": "2019-12-11T04:56:51.805Z",
            "__v": 0,
            "id": "5df077130a79c01810c59a58"
        }
 *
 */

//Retrieve only one specific analist by user
router.get('/:user', analistaController.getAnalistByUser);
/**
 * @api {get} /analista/:user 
 * @apiGroup Analista
 * @apiParam {:user} Users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "Pesquisa realizada com sucesso!",
    "body": {
        "user": "isadoraora",
        "password": "$2a$12$YmDriNGLoK1Js4of9rS7ZePqh/NKFL5.yt1vljVI/zinHTFjn3LAO",
        "createdAt": "2019-12-11T04:56:51.805Z",
        "updatedAt": "2019-12-11T04:56:51.805Z",
        "__v": 0,
        "id": "5df077130a79c01810c59a58"
    }
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