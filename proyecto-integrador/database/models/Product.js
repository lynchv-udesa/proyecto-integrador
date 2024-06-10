module.exports = function (sequelize, datatypes) {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        nombre: {
            type: datatypes.STRING,
            allowNull: false
        },
        imagen: {
            type: datatypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: datatypes.STRING,
            allowNull: false
        },
        idUsuario: {
            type: datatypes.INTEGER,
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
        })
    }

    return Product;
}