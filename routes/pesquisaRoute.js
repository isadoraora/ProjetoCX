const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisaController = require('../controllers/pesquisaController');

//creating pesquisa
router.post('/', pesquisaController.createPesquisa);

//get pesquisa de um analista pelo 'quemTeAtendeu'
router.get('/:quemTeAtendeu', pesquisaController.getAnalistaByNameFromPesquisa)

//get nota do analista
router.get('/nota/:quemTeAtendeu', pesquisaController.getNotaFromAnalista);

module.exports = router;