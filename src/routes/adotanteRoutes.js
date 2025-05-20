const express = require('express');
const router = express.Router();
const adotanteController = require('../controllers/adotanteController');

router.post('/', adotanteController.criarAdotante);
router.get('/', adotanteController.listarAdotantes);
router.get('/:id', adotanteController.buscarAdotante);
router.put('/:id', adotanteController.atualizarAdotante);
router.delete('/:id', adotanteController.deletarAdotante);

module.exports = router;
