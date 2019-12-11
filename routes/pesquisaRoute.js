const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');

//creating pesquisa
router.post('/', pesquisaController.createPesquisa);

//get notas de um analista especifico pelo User
router.get('/nota', pesquisaController.getMediaAnalista)

module.exports = router;