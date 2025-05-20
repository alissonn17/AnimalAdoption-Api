const { eventos } = require('../models/eventosModel');
const { Abrigo } = require('../models/abrigoModel');

const criarEvento = async (req, res) => {
    try {
        const { data, nome, endereco, responsavel } = req.body;

        // Verifica se o abrigo existe
        const abrigo = await Abrigo.findByPk(req.params.abrigoId);
        if (!abrigo) {
            return res.status(404).json({ erro: 'Abrigo não encontrado' });
        }

        // Cria o evento
        const novoEvento = await eventos.create({ data, nome, endereco, responsavel });
        return res.status(201).json(novoEvento);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao criar evento', detalhes: error.message });
    }
}

const listarEventos = async (req, res) => {
    try {
        const eventosListados = await eventos.findAll();
        return res.status(200).json(eventosListados);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar eventos', detalhes: error.message });
    }
};

const buscarEventoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await eventos.findByPk(id);
        if (!evento) {
            return res.status(404).json({ erro: 'Evento não encontrado' });
        }
        return res.status(200).json(evento);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar evento', detalhes: error.message });
    }
};
const atualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, nome, endereco, responsavel } = req.body;

        const evento = await eventos.findByPk(id);
        if (!evento) {
            return res.status(404).json({ erro: 'Evento não encontrado' });
        }

        evento.data = data ?? evento.data;
        evento.nome = nome ?? evento.nome;
        evento.endereco = endereco ?? evento.endereco;
        evento.responsavel = responsavel ?? evento.responsavel;

        await evento.save();
        return res.status(200).json(evento);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar evento', detalhes: error.message });
    }
};
const deletarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await eventos.findByPk(id);
        if (!evento) {
            return res.status(404).json({ erro: 'Evento não encontrado' });
        }

        await evento.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao deletar evento', detalhes: error.message });
    }
};
module.exports = {
    criarEvento,
    listarEventos,
    buscarEventoPorId,
    atualizarEvento,
    deletarEvento
};
