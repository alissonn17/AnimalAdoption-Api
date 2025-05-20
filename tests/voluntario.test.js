const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');
const Voluntario = require('../models/Voluntario');

beforeAll(async () => {
  await sequelize.sync({ force: true }); // recria o BD em memória
});

afterAll(async () => {
  await sequelize.close();
});

describe('CRUD Voluntario', () => {
  let idCriado;

  it('POST /voluntarios → cria um voluntário', async () => {
    const res = await request(app)
      .post('/voluntarios')
      .send({ nome: 'Dan', cpf: '12345678900' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    idCriado = res.body.id;
  });

  it('GET /voluntarios → deve listar', async () => {
    const res = await request(app).get('/voluntarios');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /voluntarios/:id → deve retornar um voluntário', async () => {
    const res = await request(app).get(`/voluntarios/${idCriado}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(idCriado);
  });

  it('PUT /voluntarios/:id → deve atualizar', async () => {
    const res = await request(app)
      .put(`/voluntarios/${idCriado}`)
      .send({ nome: 'Dan Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe('Dan Updated');
  });

  it('DELETE /voluntarios/:id → deve deletar', async () => {
    const res = await request(app).delete(`/voluntarios/${idCriado}`);
    expect(res.statusCode).toBe(204);
  });
});
