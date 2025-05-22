const express = require('express');
const router = express.Router();
const adocaoController = require('../controllers/adocaoController');

router.post('/', adocaoController.criarAdocao);
router.get('/', adocaoController.listarAdocoes);
router.get('/:id', adocaoController.buscarAdocao);
router.put('/:id', adocaoController.atualizarAdocao);
router.delete('/:id', adocaoController.deletarAdocao);

module.exports = router;