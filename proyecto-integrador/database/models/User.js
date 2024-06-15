module.exports = function(sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        nombreUsuario: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasenia: {
            type: dataTypes.STRING,
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        fotoPerfil: {
            type: dataTypes.STRING,
        },
    };

    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    // relaciones

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "productos",
            foreignKey: "idUsuario",
            timestamps: false,
        }),
        User.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "idUsuarioC",
            timestamps: false
        })
    }

    return User;
}
