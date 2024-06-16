const db = require('../database/models');

const indexController = {

    index: function (req, res) {
        return res.render('index', {
            index: db.Product,
        })
    },

    login: function (req, res) {
        return res.render('login')
    },

    register: function (req, res) {
        return res.render('register')
    },

    add: function (req, res) {
        return res.render('product-add', {
            mensaje: "Agregue el producto"
        });
    },

};




module.exports = indexController;
