module.exports = (sequelize, DataTypes) => {
  const Adotante = sequelize.define('Adotante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate: {
        len: [11, 11],
        isNumeric: true
      }
    },
    nomeCompleto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  }, {
    tableName: 'Adotante',
    underscored: true, // Isso usa snake_case para os nomes das colunas no banco
    timestamps: true // Isso criará os campos created_at e updated_at automaticamente
  });

  // Definir associações
  Adotante.associate = (models) => {
    // Associações serão definidas aqui quando tivermos o modelo Adocao
    // Por exemplo:
    // Adotante.hasMany(models.Adocao, {
    //   foreignKey: 'adotante_id',
    //   as: 'adocoes'
    // });
  };

  return Adotante;
};