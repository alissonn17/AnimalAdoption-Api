const express = require('express');
const animalController = require('../controllers/animalController');

const router = express.Router();

/**
 * @swagger
 * /api/animais:
 *   get:
 *     summary: Lista todos os animais
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', animalController.listarAnimais);

/**
 * @swagger
 * /api/animais/{id}:
 *   get:
 *     summary: Busca um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do animal
 *     responses:
 *       200:
 *         description: Animal encontrado com sucesso
 *       404:
 *         description: Animal não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', animalController.buscarAnimalPorId);

/**
 * @swagger
 * /api/animais:
 *   post:
 *     summary: Cria um novo animal
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - especie
 *               - porte
 *               - sexo
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *               raca:
 *                 type: string
 *               idade:
 *                 type: integer
 *               porte:
 *                 type: string
 *                 enum: [pequeno, médio, grande]
 *               sexo:
 *                 type: string
 *                 enum: [macho, fêmea]
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [disponível, em processo, adotado]
 *               foto_url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', animalController.criarAnimal);

/**
 * @swagger
 * /api/animais/{id}:
 *   put:
 *     summary: Atualiza um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *               raca:
 *                 type: string
 *               idade:
 *                 type: integer
 *               porte:
 *                 type: string
 *                 enum: [pequeno, médio, grande]
 *               sexo:
 *                 type: string
 *                 enum: [macho, fêmea]
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [disponível, em processo, adotado]
 *               foto_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Animal atualizado com sucesso
 *       404:
 *         description: Animal não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', animalController.atualizarAnimal);

/**
 * @swagger
 * /api/animais/{id}:
 *   delete:
 *     summary: Exclui um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do animal
 *     responses:
 *       204:
 *         description: Animal excluído com sucesso
 *       404:
 *         description: Animal não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', animalController.excluirAnimal);

module.exports = router;