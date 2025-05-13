const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const corsMiddleware = require('./middleware/corsMiddleware');
const routes = require('./routes');

// Inicializa o app Express
const app = express();

// Carrega o arquivo de configuração Swagger
const swaggerDocument = YAML.load(path.join(__dirname, './swagger/swagger.yaml'));

// Middleware para CORS
app.use(corsMiddleware);

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas da API
app.use('/api', routes);

// Rota para a raiz do serviço
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ocorreu um erro interno no servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Erro interno'
  });
});

module.exports = app;