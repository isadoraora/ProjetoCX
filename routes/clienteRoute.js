const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const clienteSchema = require('../apiSchema/clienteSchema');
const tokenValidation = require('../middleware/tokenValidation');

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

module.exports = router;
