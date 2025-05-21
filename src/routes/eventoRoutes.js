const express =require('express'); 
const router = express.Router();  
const eventoController = require('../controllers/eventoController');

router.post('/', eventoController.criaEvento); 
router.get('/', eventoController.listaEvento);  
router.get('/:id', eventoController.buscaEvento); 
router.delete('/:id', eventoController.deletaEvento);  
router.put('/:id', eventoController.atualizaEvento);  

module.exports =router;  