const { models } = require('../models');
const { Adocao } = models;

// CREATE - Criar uma nova adoção
exports.criarAdocao = async (req, res) => {
  try {
    const adocao = await Adocao.create(req.body);
    return res.status(201).json(adocao);
  } catch (error) {
    console.error('Erro ao criar adoção:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Listar todas as adoções
exports.listarAdocoes = async (req, res) => {
  try {
    const adocoes = await Adocao.findAll();
    return res.status(200).json(adocoes);
  } catch (error) {
    console.error('Erro ao listar adoções:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Buscar uma adoção específica
exports.buscarAdocao = async (req, res) => {
  try {
    const adocao = await Adocao.findByPk(req.params.id);
    if (!adocao) {
      return res.status(404).json({ error: 'Adoção não encontrada' });
    }
    return res.status(200).json(adocao);
  } catch (error) {
    console.error('Erro ao buscar adoção:', error);
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualizar uma adoção
exports.atualizarAdocao = async (req, res) => {
  try {
    const [updated] = await Adocao.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Adoção não encontrada' });
    }
    const adocaoAtualizada = await Adocao.findByPk(req.params.id);
    return res.status(200).json(adocaoAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar adoção:', error);
    return res.status(500).json({ error: error.message });
  }
};

// DELETE - Remover uma adoção
exports.deletarAdocao = async (req, res) => {
  try {
    const deleted = await Adocao.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Adoção não encontrada' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar adoção:', error);
    return res.status(500).json({ error: error.message });
  }
};