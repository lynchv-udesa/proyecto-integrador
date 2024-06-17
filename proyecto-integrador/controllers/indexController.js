const db = require('../database/models');

const indexController = {

    index: function (req, res) {
        db.Product.findAll()
            .then(products => {
                return res.render('index', {
                    index: products,
                    user: req.session.user
                });
            })
            .catch(error => console.log(error));
    },

    register: function (req, res) {
        return res.render('register')
    },


};




module.exports = indexController;
