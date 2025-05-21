const express = require('express');
const voluntarioController = require('../controllers/voluntarioController');
const router = express.Router();

router.post('/', voluntarioController.createVoluntario);
router.get('/', voluntarioController.getAllVoluntarios);
router.get('/:id', voluntarioController.getVoluntarioById);
router.put('/:id', voluntarioController.updateVoluntario);
router.delete('/:id', voluntarioController.deleteVoluntario);

module.exports = router;
