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


    producto: function (req, res) {
        let id = req.params.nombreProducto;
        let results = [];
        for (let i = 0; i < db.Product.length; i++) {
            if (id == db.Product.id) {
                results.push(db.productos[i])
            }
        }
        if (resultado.length != 0) {
            return res.render('search-result', {
                index: db.Product,
                imagen: `${db.Product[i].imagen}`,
                descripcion: `${db.Product[i].descripcion}`,
                nombreProducto: `${db.Product[i].nombreProducto}`,
                id: `${db.Product[i].id}`,
            })
        }

        else {
            return res.render('product', {
                mensaje: "No se encontraron resultados para"
            })
        }
    }

};




module.exports = indexController;
