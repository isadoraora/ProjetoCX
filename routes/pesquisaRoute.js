const express = require('express');
const router = express.Router();
const pesquisaSchema = require('../apiSchema/pesquisaSchema');
const pesquisa = require('../controllers/pesquisaController');
const tokenValidation = require('../middleware/tokenValidation');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');

//creating pesquisa
router.post('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(pesquisaSchema.createPesquisaSchema),
    pesquisa.createPesquisa
);

// router.get('/:id',
//     tokenValidation.validateToken,
//     pesquisa.getPesquisatById
// );
// router.put('/:id',
//     tokenValidation.validateToken,
//     joiSchemaValidation.validateBody(pesquisaSchema.updatepesquisaSchema),
//     pesquisa.updatePesquisa
// );

// router.get('/',
//     tokenValidation.validateToken,
//     joiSchemaValidation.validateQueryParams(pesquisaSchema.getAllpesquisaSchema),
//     pesquisa.getAllPesquisa
// );

// router.delete('/:id',
//     tokenValidation.validateToken,
//     pesquisa.deletePesquisa
// );

module.exports = router;