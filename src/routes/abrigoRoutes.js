const express = require('express');
const router = express.Router();
const abrigoController = require('../controllers/abrigoController');

router.get('/', abrigoController.listarAbigos);
router.get('/:id', abrigoController.buscarAbrigoPorId);
router.post('/', abrigoController.criarAbrigo);
router.put('/:id', abrigoController.atualizarAbrigo);
router.delete('/:id', abrigoController.deletarAbrigo);

module.exports = router;
