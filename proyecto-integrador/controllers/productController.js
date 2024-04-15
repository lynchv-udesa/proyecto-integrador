let db = require('../db/index');

const productController = {

    show: function (req, res) {
        let id = req.params.id;
        for (let i = 0; i < db.productos.length; i++) {
            if (id == db.productos[i].id) {
                return res.render('product', {
                    index: db.productos,
                    imagen: `${db.productos[i].imagen}`,
                    descripcion: `${db.productos[i].descripcion}`,
                    nombreProducto: `${db.productos[i].nombreProducto}`,
                    comment: db.comentarios,


                })
            }
        }
    },


    add: function(req, res) {
        return res.render('product-add');
    },

    search: function(req, res) {
        let nombreProducto = req.query.nombreProducto; 
        let results = [];
        let id = req.params.nombreProducto;
    
        for (let i = 0; i < db.productos.length; i++) {
            if (id == db.productos[i].nombreProducto) {
                results.push(db.productos[i]);
            }
        }
    
        if (!nombreProducto) {
            if (results.length > 0) {
                return res.render('search-results', {
                    index: results.map(result => ({
                        imagen: result.imagen,
                        descripcion: result.descripcion,
                        nombreProducto: result.nombreProducto,
                        id: result.id
                    }))
                });
            } else {
                return res.render("search-results", {
                    mensaje: "No se encontraron resultados para"
                });
            }
        } else {
            return res.redirect(`/product/search-results/${id}`);
        }
    }
}

module.exports = productController;