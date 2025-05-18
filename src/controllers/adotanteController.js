const { models } = require('../models');
const { Adotante } = models;

// CREATE - Criar um novo adotante
exports.criarAdotante = async (req, res) => {
  try {
    const adotante = await Adotante.create(req.body);
    return res.status(201).json(adotante);
  } catch (error) {
    console.error('Erro ao criar adotante:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Listar todos os adotantes
exports.listarAdotantes = async (req, res) => {
  try {
    const adotantes = await Adotante.findAll();
    return res.status(200).json(adotantes);
  } catch (error) {
    console.error('Erro ao listar adotantes:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Buscar um adotante específico
exports.buscarAdotante = async (req, res) => {
  try {
    const adotante = await Adotante.findByPk(req.params.id);
    if (!adotante) {
      return res.status(404).json({ error: 'Adotante não encontrado' });
    }
    return res.status(200).json(adotante);
  } catch (error) {
    console.error('Erro ao buscar adotante:', error);
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualizar um adotante
exports.atualizarAdotante = async (req, res) => {
  try {
    const [updated] = await Adotante.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Adotante não encontrado' });
    }
    const adotanteAtualizado = await Adotante.findByPk(req.params.id);
    return res.status(200).json(adotanteAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar adotante:', error);
    return res.status(500).json({ error: error.message });
  }
};

// DELETE - Remover um adotante
exports.deletarAdotante = async (req, res) => {
  try {
    const deleted = await Adotante.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Adotante não encontrado' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar adotante:', error);
    return res.status(500).json({ error: error.message });
  }
};