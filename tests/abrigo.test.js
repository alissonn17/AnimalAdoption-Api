const request = require('supertest');
const app = require('../server');
const { Abrigo, sequelize } = require('../src/models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('CRUD Abrigo', () => {
    let idAbrigo;

    test('POST /abrigos - cria abrigo', async () => {
        const res = await request(app)
            .post('/abrigos')
            .send({ nome: 'Abrigo Feliz', endereco: 'Rua A, 123', capacidade: 50 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.nome).toBe('Abrigo Feliz');
        idAbrigo = res.body.id;
    });

    test('GET /abrigos - lista abrigos', async () => {
        const res = await request(app).get('/abrigos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('GET /abrigos/:id - busca abrigo por id', async () => {
        const res = await request(app).get(`/abrigos/${idAbrigo}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.nome).toBe('Abrigo Feliz');
    });

    test('GET /abrigos/:id - 404 para abrigo não encontrado', async () => {
        const res = await request(app).get('/abrigos/99999');
        expect(res.statusCode).toBe(404);
    });

    test('PUT /abrigos/:id - atualiza abrigo', async () => {
        const res = await request(app)
            .put(`/abrigos/${idAbrigo}`)
            .send({ capacidade: 100 });

        expect(res.statusCode).toBe(200);
        expect(res.body.capacidade).toBe(100);
    });

    test('DELETE /abrigos/:id - deleta abrigo', async () => {
        const res = await request(app).delete(`/abrigos/${idAbrigo}`);
        expect(res.statusCode).toBe(204);
    });

    test('DELETE /abrigos/:id - 404 para abrigo inexistente', async () => {
        const res = await request(app).delete(`/abrigos/${idAbrigo}`);
        expect(res.statusCode).toBe(404);
    });
});

