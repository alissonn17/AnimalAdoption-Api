const { models } = require('../models');
const { Voluntario } = models;


// Criar novo voluntário
exports.createVoluntario = async (req, res) => {
  try {
    const voluntario = await Voluntario.create(req.body);
    res.status(201).json(voluntario);
  } catch (error) {
    console.error('Erro ao criar adotante:', error);
    res.status(400).json({ error: error.message });
  }
};

// Listar todos
exports.getAllVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.findAll();
    return res.status(200).json(voluntarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar por ID
exports.getVoluntarioById = async (req, res) => {
  try {
    const voluntario = await Voluntario.findByPk(req.params.id);
    if (!voluntario) return res.status(404).json({ message: 'Voluntário não encontrado' });
    res.json(voluntario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar
exports.updateVoluntario = async (req, res) => {
  try {
    const voluntario = await Voluntario.findByPk(req.params.id);
    if (!voluntario) return res.status(404).json({ message: 'Voluntário não encontrado' });

    await voluntario.update(req.body);
    res.json(voluntario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar
exports.deleteVoluntario = async (req, res) => {
  try {
    const voluntario = await Voluntario.findByPk(req.params.id);
    if (!voluntario) return res.status(404).json({ message: 'Voluntário não encontrado' });

    await voluntario.destroy();
    res.json({ message: 'Voluntário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
