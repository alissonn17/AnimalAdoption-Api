require('dotenv').config();

const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

// Sincroniza o banco de dados e inicia o servidor
async function startServer() {
  try {
    console.log('Conectando ao banco de dados...');
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    
    console.log('Sincronizando modelos com o banco de dados...');
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('Modelos sincronizados com sucesso!');
    
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Documentação da API disponível em: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();