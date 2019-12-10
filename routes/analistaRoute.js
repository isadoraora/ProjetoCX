const express = require('express');
const router = express.Router();
const analistaController = require('../controllers/analistaController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const analistaSchema = require('../apiSchema/analistaSchema');

router.post('/signup',
    joiSchemaValidation.validateBody(analistaSchema.signup),
    analistaController.signup
);

router.post('/login',
    joiSchemaValidation.validateBody(analistaSchema.login),
    analistaController.login
);

//Retrieving all cadastros
router.get('/analista', analistaController.findAll);

//Retrieve only one specific cadastro by USER
router.get('/analista/:user', analistaController.getUser);

//Update a cadastri
router.put('/analista/:user', analistaController.update);

//Deleting a cadastro by its USER
router.delete('/analista/:user', analistaController.delete);

module.exports = router;