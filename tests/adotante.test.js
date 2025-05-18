const request = require('supertest');
const app = require('../server'); 
const { models } = require('../models');

describe('Testes de Adotante API', () => {
  let adotanteId;
  
  // Dados de teste
  const novoAdotante = {
    cpf: '12345678901',
    nomeCompleto: 'João da Silva',
    genero: 'Masculino',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Flores, 123',
    email: 'joao@example.com'
  };

  // Teste para criar um adotante
  test('Deve criar um novo adotante', async () => {
    const response = await request(app)
      .post('/adotantes')
      .send(novoAdotante);
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nomeCompleto).toBe(novoAdotante.nomeCompleto);
    
    adotanteId = response.body.id; // Guardar o ID para usar nos próximos testes
  });

  // Teste para listar adotantes
  test('Deve listar todos os adotantes', async () => {
    const response = await request(app).get('/adotantes');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Teste para buscar um adotante específico
  test('Deve buscar um adotante pelo ID', async () => {
    const response = await request(app).get(`/adotantes/${adotanteId}`);
    
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(adotanteId);
  });

  // Teste para atualizar um adotante
  test('Deve atualizar um adotante', async () => {
    const dadosAtualizados = {
      telefone: '(11) 91234-5678',
      endereco: 'Rua das Palmeiras, 456'
    };
    
    const response = await request(app)
      .put(`/adotantes/${adotanteId}`)
      .send(dadosAtualizados);
    
    expect(response.status).toBe(200);
    expect(response.body.telefone).toBe(dadosAtualizados.telefone);
    expect(response.body.endereco).toBe(dadosAtualizados.endereco);
  });

  // Teste para deletar um adotante
  test('Deve deletar um adotante', async () => {
    const response = await request(app).delete(`/adotantes/${adotanteId}`);
    
    expect(response.status).toBe(204);
    
    // Verificar se foi realmente deletado
    const checkResponse = await request(app).get(`/adotantes/${adotanteId}`);
    expect(checkResponse.status).toBe(404);
  });

  // Limpar dados após os testes
  afterAll(async () => {
    await models.Adotante.destroy({ where: {}, truncate: true });
  });
});