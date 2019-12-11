const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');
const tokenValidation = require('../middleware/tokenValidation');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');

//creating pesquisa
router.post('/',pesquisaController.createPesquisa);

module.exports = router;