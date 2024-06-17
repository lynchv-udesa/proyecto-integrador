const db = require('../database/models');

const indexController = {

    index: function (req, res) {
        return res.render('index', {
            index: db.Product,
        })
    },

    register: function (req, res) {
        return res.render('register')
    },

    add: function (req, res) {
        const nombreUsuario = req.session.user
        return res.render('product-add', {
            mensaje: "Agregue el producto",
            nombreUsuario: nombreUsuario
        });
    },

};




module.exports = indexController;
