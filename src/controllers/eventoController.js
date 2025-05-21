const { models } = require('../models');
const { Evento } = models;


exports.criarEvento = async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    return res.status(201).json(evento);
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Listar todos os eventos
exports.listaEvento = async (req, res) => {
  try {
    const evento = await Evento.findAll();
    return res.status(200).json(eventos);
  } catch (error) {
    console.error('Erro ao listar eventos:', error);
    return res.status(500).json({ error: error.message });
  }
};

// READ - Buscar um evento específico
exports.buscaEvento = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (!evento) {
      return res.status(404).json({ error: 'evento não encontrado' });
    }
    return res.status(200).json(evento);
  } catch (error) {
    console.error('Erro ao buscar evento:', error);
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualizar um evento
exports.atualizaEvento = async (req, res) => {
  try {
    const [updated] = await Evento.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Evento não encontrado' });
    }
    const eventoAtualizado = await Evento.findByPk(req.params.id);
    return res.status(200).json(eventoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar erro:', error);
    return res.status(500).json({ error: error.message });
  }
};

// DELETE - Remover um evento
exports.deletaEvento = async (req, res) => {
  try {
    const deleted = await Evento.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Evento não encontrado' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar evento:', error);
    return res.status(500).json({ error: error.message });
  }
};