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

                })
            }
        }
    },

    comentarios: function (req, res) {
        for (let i = 27; i < db.productos.length; i++){ 
            return res.render('product', {
                comment: db.comentarios,
                nombreUsuarioC: `${db.comentarios[i].nombreUsuarioC}`,
                textoC: `${db.comentarios[i].nombreUsuarioC}`,
                imagenPerfilC: `${db.comentarios[i].imagenPerfilC}`,

            })}
    },

    add: function(req, res) {
        return res.render('product-add');
    }
}

module.exports = productController;