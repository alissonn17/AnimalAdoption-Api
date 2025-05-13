const { models } = require('../models');
const { Animal } = models;

// Listar todos os animais
exports.listarAnimais = async (req, res) => {
  try {
    const animais = await Animal.findAll();
    return res.status(200).json(animais);
  } catch (error) {
    console.error('Erro ao listar animais:', error);
    return res.status(500).json({ message: 'Erro ao listar animais', error: error.message });
  }
};

// Buscar animal por ID
exports.buscarAnimalPorId = async (req, res) => {
  const { id } = req.params;
  
  try {
    const animal = await Animal.findByPk(id);
    
    if (!animal) {
      return res.status(404).json({ message: 'Animal não encontrado' });
    }
    
    return res.status(200).json(animal);
  } catch (error) {
    console.error('Erro ao buscar animal:', error);
    return res.status(500).json({ message: 'Erro ao buscar animal', error: error.message });
  }
};

// Criar um novo animal
exports.criarAnimal = async (req, res) => {
  const { 
    nome, especie, raca, idade, porte, 
    sexo, descricao, status, foto_url 
  } = req.body;
  
  try {
    const novoAnimal = await Animal.create({ 
      nome, 
      especie, 
      raca: raca || null, 
      idade: idade || null, 
      porte, 
      sexo, 
      descricao: descricao || null, 
      status: status || 'disponível', 
      foto_url: foto_url || null,
    });
    
    return res.status(201).json(novoAnimal);
  } catch (error) {
    console.error('Erro ao criar animal:', error);
    return res.status(500).json({ message: 'Erro ao criar animal', error: error.message });
  }
};

// Atualizar animal
exports.atualizarAnimal = async (req, res) => {
  const { id } = req.params;
  const { 
    nome, especie, raca, idade, porte, 
    sexo, descricao, status, foto_url 
  } = req.body;
  
  try {
    const animal = await Animal.findByPk(id);
    
    if (!animal) {
      return res.status(404).json({ message: 'Animal não encontrado' });
    }
    
    await animal.update({ 
      nome, 
      especie, 
      raca, 
      idade, 
      porte, 
      sexo, 
      descricao, 
      status, 
      foto_url,
    });
    
    return res.status(200).json(animal);
  } catch (error) {
    console.error('Erro ao atualizar animal:', error);
    return res.status(500).json({ message: 'Erro ao atualizar animal', error: error.message });
  }
};

// Excluir animal
exports.excluirAnimal = async (req, res) => {
  const { id } = req.params;
  
  try {
    const animal = await Animal.findByPk(id);
    
    if (!animal) {
      return res.status(404).json({ message: 'Animal não encontrado' });
    }
    
    await animal.destroy();
    
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir animal:', error);
    return res.status(500).json({ message: 'Erro ao excluir animal', error: error.message });
  }
};