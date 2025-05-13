process.env.NODE_ENV = 'test';
const { sequelize } = require('../src/models');

// Função para configurar o banco de dados de teste
async function setupTestDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão de teste estabelecida com sucesso.');
    
    await sequelize.sync({ force: true });
    console.log('Banco de dados de teste sincronizado.');
  } catch (error) {
    console.error('Erro ao configurar banco de dados de teste:', error);
    process.exit(1);
  }
}

// Função para limpar o banco de dados de teste
async function cleanupTestDatabase() {
  try {
    await sequelize.drop();
    await sequelize.close();
    console.log('Banco de dados de teste limpo e conexões fechadas.');
  } catch (error) {
    console.error('Erro ao limpar banco de dados de teste:', error);
    process.exit(1);
  }
}

module.exports = {
  setupTestDatabase,
  cleanupTestDatabase,
};