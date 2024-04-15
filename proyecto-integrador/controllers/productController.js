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

    search: function(req,res) {
        let nombreProducto = req.query.nombreProducto; 
        if (nombreProducto) {
            return res.redirect(`/search-results/${nombreProducto}`)
        } else {
            return res.render("search-results", {
                mensaje: "No se encontraron resultados para"
            });
    }},
    
    producto: function(req,res){
        let id = req.params.nombreProducto;
        let results = [];
        for(let i=0; i < db.productos.length; i++){
            if(id == db.productos.id){
                results.push(db.productos[i])
            }
        }
            if(resultado.length == 0){
                return res.render('product', {
                    index: db.productos,
                    imagen: `${db.productos[i].imagen}`,
                    descripcion: `${db.productos[i].descripcion}`,
                    nombreProducto: `${db.productos[i].nombreProducto}`,
                    id: `${db.productos[i].id}`,
                })}
                
                else{
                    return res.render('product', {
                        mensaje: "No se encontraron resultados para"
                    })
                }
            }
    
    
};

module.exports = productController;