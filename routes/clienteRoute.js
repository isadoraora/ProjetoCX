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

//login route validated
router.post('/login',
    joiSchemaValidation.validateBody(clienteSchema.login),
    clienteController.login
);

//Retrieving all cadastros
router.get('/cliente', clienteController.findAll);

//Retrieve only one specific cadastro by CPF
router.get('/cliente/:cpf', clienteController.getCpf);

//Update a cadastri
router.put('/cliente/:cpf', clienteController.update);

//Deleting a cadastro
router.delete('/cliente/:cpf', clienteController.delete);

module.exports = router;
