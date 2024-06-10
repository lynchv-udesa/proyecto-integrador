module.exports = function(sequelize, datatypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTERGER,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        birthDate: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTERGER,
        },
        profilePic: {
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
            as: "products",
            foreignKey: " ",
            timestamps: false,
        }),
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: " ",
            timestamps: false
        })
    }

    return User;
}
