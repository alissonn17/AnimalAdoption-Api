const request = require('supertest');
const app = require('../src/app');
const { setupTestDatabase, cleanupTestDatabase } = require('./setup');
const { models } = require('../src/models');
const { Animal } = models;

// Executa antes de todos os testes
beforeAll(async () => {
  await setupTestDatabase();
});

// Executa após todos os testes
afterAll(async () => {
  await cleanupTestDatabase();
});

describe('Testes de API de Animais', () => {
  // Dados de teste
  const animalTeste = {
    nome: 'Rex',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    idade: 3,
    porte: 'médio',
    sexo: 'macho',
    descricao: 'Cachorro dócil e brincalhão',
    status: 'disponível',
    foto_url: 'https://exemplo.com/foto-rex.jpg'
  };

  let animalId;

  // Testa a criação de um animal
  describe('POST /api/animais', () => {
    it('Deve criar um novo animal', async () => {
      const response = await request(app)
        .post('/api/animais')
        .send(animalTeste)
        .expect(201);
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.nome).toBe(animalTeste.nome);
      
      animalId = response.body.id;
    });
  });

  // Testa a listagem de animais
  describe('GET /api/animais', () => {
    it('Deve listar todos os animais', async () => {
      const response = await request(app)
        .get('/api/animais')
        .expect(200);
      
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  // Testa a busca de um animal por ID
  describe('GET /api/animais/:id', () => {
    it('Deve retornar um animal específico', async () => {
      const response = await request(app)
        .get(`/api/animais/${animalId}`)
        .expect(200);
      
      expect(response.body.id).toBe(animalId);
      expect(response.body.nome).toBe(animalTeste.nome);
    });

    it('Deve retornar 404 para um ID inexistente', async () => {
      await request(app)
        .get('/api/animais/999999')
        .expect(404);
    });
  });

  // Testa a atualização de um animal
  describe('PUT /api/animais/:id', () => {
    it('Deve atualizar um animal existente', async () => {
      const dadosAtualizados = {
        ...animalTeste,
        nome: 'Rex Atualizado',
        status: 'em processo'
      };

      const response = await request(app)
        .put(`/api/animais/${animalId}`)
        .send(dadosAtualizados)
        .expect(200);
      
      expect(response.body.nome).toBe(dadosAtualizados.nome);
      expect(response.body.status).toBe(dadosAtualizados.status);
    });

    it('Deve retornar 404 ao tentar atualizar um animal inexistente', async () => {
      await request(app)
        .put('/api/animais/999999')
        .send(animalTeste)
        .expect(404);
    });
  });

  // Testa a exclusão de um animal
  describe('DELETE /api/animais/:id', () => {
    it('Deve excluir um animal existente', async () => {
      await request(app)
        .delete(`/api/animais/${animalId}`)
        .expect(204);
      
      // Verifica se o animal foi realmente excluído
      const animalExcluido = await Animal.findByPk(animalId);
      expect(animalExcluido).toBeNull();
    });

    it('Deve retornar 404 ao tentar excluir um animal inexistente', async () => {
      await request(app)
        .delete('/api/animais/999999')
        .expect(404);
    });
  });
});