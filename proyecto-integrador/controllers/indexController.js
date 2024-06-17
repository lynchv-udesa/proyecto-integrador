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


};




module.exports = indexController;
