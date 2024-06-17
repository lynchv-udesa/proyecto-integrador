const db = require('../database/models');

const indexController = {

    index: function (req, res) {
        db.Product.findAll({
            include: [
                { association: 'usuarios' }
            ],
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 8
        })
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
