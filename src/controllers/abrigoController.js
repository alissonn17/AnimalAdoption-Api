const { Abrigo } = require('../models');

const criarAbrigo = async (req, res) => {
    try {
        const { nome, endereco, capacidade } = req.body;
        const novoAbrigo = await Abrigo.create({ nome, endereco, capacidade });
        return res.status(201).json(novoAbrigo);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao criar abrigo', detalhes: error.message });
    }
};

const listarAbigos = async (req, res) => {
    try {
        const abrigos = await Abrigo.findAll();
        return res.status(200).json(abrigos);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar abrigos', detalhes: error.message });
    }
};

const buscarAbrigoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const abrigo = await Abrigo.findByPk(id);
        if (!abrigo) {
            return res.status(404).json({ erro: 'Abrigo não encontrado' });
        }
        return res.status(200).json(abrigo);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar abrigo', detalhes: error.message });
    }
};

const atualizarAbrigo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, endereco, capacidade } = req.body;

        const abrigo = await Abrigo.findByPk(id);
        if (!abrigo) {
            return res.status(404).json({ erro: 'Abrigo não encontrado' });
        }

        abrigo.nome = nome ?? abrigo.nome;
        abrigo.endereco = endereco ?? abrigo.endereco;
        abrigo.capacidade = capacidade ?? abrigo.capacidade;

        await abrigo.save();
        return res.status(200).json(abrigo);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar abrigo', detalhes: error.message });
    }
};

const deletarAbrigo = async (req, res) => {
    try {
        const { id } = req.params;
        const abrigo = await Abrigo.findByPk(id);
        if (!abrigo) {
            return res.status(404).json({ erro: 'Abrigo não encontrado' });
        }
        await abrigo.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao deletar abrigo', detalhes: error.message });
    }
};

module.exports = {
    criarAbrigo,
    listarAbigos,
    buscarAbrigoPorId,
    atualizarAbrigo,
    deletarAbrigo,
};
