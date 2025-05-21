const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

let sequelize;

if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
  );
}

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// Carrega os modelos
db.models.Animal = require('./Animal')(sequelize, Sequelize.DataTypes);
db.models.Adotante = require('./Adotante')(sequelize, Sequelize.DataTypes);
db.models.Evento = require('./Evento')(sequelize, Sequelize.DataTypes);


// Associações entre modelos (quando houver)
Object.keys(db.models).forEach((modelName) => {
  if (db.models[modelName].associate) {
    db.models[modelName].associate(db.models);
  }
});

module.exports = db;
