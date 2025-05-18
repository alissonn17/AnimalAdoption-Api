const express = require('express');
const router = express.Router();
const adotanteController = require('../controllers/adotanteController');

// Rotas CRUD para Adotantes
router.post('/adotantes', adotanteController.criarAdotante);
router.get('/adotantes', adotanteController.listarAdotantes);
router.get('/adotantes/:id', adotanteController.buscarAdotante);
router.put('/adotantes/:id', adotanteController.atualizarAdotante);
router.delete('/adotantes/:id', adotanteController.deletarAdotante);

module.exports = router;