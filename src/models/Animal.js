module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    raca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    porte: {
      type: DataTypes.ENUM('pequeno', 'médio', 'grande'),
      allowNull: false,
    },
    sexo: {
      type: DataTypes.ENUM('macho', 'fêmea'),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('disponível', 'em processo', 'adotado'),
      defaultValue: 'disponível',
      allowNull: false,
    },
    foto_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_chegada: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {
    tableName: 'animais',
  });

  Animal.associate = (models) => {
    // Aqui serão definidas as associações quando outros modelos forem criados
    // Por exemplo: Animal.belongsTo(models.Abrigo);
  };

  return Animal;
};