const express =require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

router.post('/', eventosController.criarEvento);
router.get('/', eventosController.listarEventos);
router.get('/:id', eventosController.buscarEvento);
router.delete('/:id', eventosController.deletarEvento);

module.exports =router;