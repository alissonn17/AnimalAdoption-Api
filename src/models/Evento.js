module.exports = (sequelize, DataTypes) => {   //exporta a função. sequelize é a instância do banco de dados e DataTypes é um objeto que contém os tipos de dados do sequelize
  
  const Evento = sequelize.define('Evento', { //cria o modelo do evento
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    responsavel: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'evento',
    timestamps: false,
  });

  
  return Evento; //returna o modelo Eventos e permite que ele seja usado em outros arquivos
};
