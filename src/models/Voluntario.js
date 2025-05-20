const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voluntario = sequelize.define('Voluntario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11],
      isNumeric: true,
    },
  },
  genero: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  telefone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  }
}, {
  tableName: 'voluntario',
  timestamps: false,
});

module.exports = Voluntario;
