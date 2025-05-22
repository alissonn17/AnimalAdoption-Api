module.exports = (sequelize, DataTypes) => {
  const Adocao = sequelize.define('Adocao', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adotante_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_adocao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'pendente',
      validate: {
        isIn: [['pendente', 'aprovada', 'rejeitada', 'finalizada']]
      }
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'adocoes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Adocao;
};