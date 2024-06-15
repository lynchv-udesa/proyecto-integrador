module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        idUsuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }

    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: false,
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "idProducto",
            timestamps: false
        }),
        Product.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "idUsuario",
            timestamps: false
        })
    }

    return Product;
}