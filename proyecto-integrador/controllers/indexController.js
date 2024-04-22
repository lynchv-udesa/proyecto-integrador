let db = require("../db/index");

const indexController = {

    index: function (req, res) {
        return res.render('index', {
            index: db.productos,
        })
    },

    login: function (req, res) {
        return res.render('login')
    },

    register: function (req, res) {
        return res.render('register')
    },


    producto: function (req, res) {
        let id = req.params.nombreProducto;
        let results = [];
        for (let i = 0; i < db.productos.length; i++) {
            if (id == db.productos.id) {
                results.push(db.productos[i])
            }
        }
        if (resultado.length != 0) {
            return res.render('search-result', {
                index: db.productos,
                imagen: `${db.productos[i].imagen}`,
                descripcion: `${db.productos[i].descripcion}`,
                nombreProducto: `${db.productos[i].nombreProducto}`,
                id: `${db.productos[i].id}`,
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
