module.exports = function(sequelize, datatypes){
    let alias = "Comment";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER.UNSIGNED,
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
        tableName: 'productos', 
        timestamps: true, 
        underscored: false,
    }

   const Product = sequelize.define(alias, cols, config);

   return Product;
