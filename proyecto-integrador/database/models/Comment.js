module.exports = function (sequelize, datatypes) {
    let alias = "Comment";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        nombre: {
            type: datatypes.STRING,
            allowNull: false
        },
        texto: {
            type: datatypes.STRING,
            allowNull: false
        },
        idUsuarioC: {
            type: datatypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idProducto: {
            type: datatypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    }
}

let config = {
    tableName: 'comentarios',
    timestamps: true,
    underscored: false,
}

Comment.associate = function (models) {
    Comment.belongsTo(models.Product, {
        as: "productos",
        foreignKey: "idProducto",
        timestamps: false
    }),
    Comment.belongsTo(models.User, {
        as: "user",
        foreignKey: "idUsuarioC",
        timestamps: false
    })
}

return Comment;
