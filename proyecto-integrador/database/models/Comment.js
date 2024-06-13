module.exports = function (sequelize, dataTypes) {
    let alias = "Comment";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING,
            allowNull: false
        },
        idUsuarioC: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idProducto: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    }

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false,
    }

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "idProducto",
            timestamps: false
        });
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "idUsuarioC",
            timestamps: false
        });
    };

    return Comment;
}



