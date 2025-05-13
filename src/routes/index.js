const express = require('express');
const animalRoutes = require('./animalRoutes');

const router = express.Router();

// Definir todas as rotas
router.use('/animais', animalRoutes);

// Rota padrão para verificação da API
router.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Adoção de Animais',
    status: 'online',
    version: '1.0.0',
  });
});

module.exports = router;