module.exports = (sequelize, DataTypes) => {
    const Abrigo = sequelize.define('Abrigo', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'abrigos',
        timestamps: true,
    });

    return Abrigo;
};
