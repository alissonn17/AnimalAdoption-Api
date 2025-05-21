module.exports = (sequelize, DataTypes) => { // essa função é chamada quando o sequelize carrega o modelo , datatypes é um objeto que contém os tipos de dados do sequelize
  //Definindo o modelo de Eventos
  // o sequelize.define é uma função que define um modelo no sequelize, o primeiro parâmetro é o nome do modelo e o segundo é um objeto que contém os atributos do modelo
  // o terceiro parâmetro é um objeto que contém as opções do modelo
  // o sequelize.define é uma função que define um modelo no sequelize, o primeiro parâmetro é o nome do modelo e o segundo é um objeto que contém os atributos do modelo
  // o terceiro parâmetro é um objeto que contém as opções do modelo
  const Eventos = sequelize.define('Eventos', {
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
    tableName: 'eventos',
    timestamps: false,
  });

  
  return Eventos; //returna o modelo Eventos
};
