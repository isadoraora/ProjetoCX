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
router.get('/', analistaController.getAllAnalists);

//Retrieve only one specific analist by user
router.get('/:user', analistaController.getAnalistByUser);

//Update analist by ID
router.put('/:id', analistaController.updateAnalist);

//Deleting a cadastro by ID from mongoDB
router.delete('/:id', analistaController.deleteAnalist);

module.exports = router;