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
router.get('/', clienteController.findAll)

//Finding Client byId
router.get('/:id', clienteController.getClientById)

//updating client ById
router.put('/:id', clienteController.updateClient)

//delete client byID
router.delete('/:id', clienteController.deleteClient)

module.exports = router;
