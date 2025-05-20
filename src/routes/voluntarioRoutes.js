const express = require('express');
const router = express.Router();
const voluntarioController = require('../controllers/voluntarioController');

router.post('/', voluntarioController.createVoluntario);
router.get('/', voluntarioController.getAllVoluntarios);
router.get('/:id', voluntarioController.getVoluntarioById);
router.put('/:id', voluntarioController.updateVoluntario);
router.delete('/:id', voluntarioController.deleteVoluntario);

module.exports = router;
