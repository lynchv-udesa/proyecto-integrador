let db = require('../db/index');

const indexController = {
    productos: function(req,res){
        return res.render('productos', {
            index: db.productos,
        })
    },
    
    show: function(req,res){
        let id = req.params.id;
        for(let i=0; i < db.productos.length; i++){
            if(id == db.productos.id){
                return res.render('producto', {
                    index: db.productos,
                    imagen: `${db.productos[i].imagen}`,
                    descripcion: `${db.productos[i].descripcion}`,
                    nombreProducto: `${db.productos[i].nombreProducto}`,

                })
            }
        }},

    comentarios: function(req,res){
        return res.render('comentarios', {
            comment: db.comentarios, 
        })
    },

    profile: function(req,res){
        for(let i=0; i < db.usuario[1]; i++){
                return res.render('usuario', {
                    index: db.usuario,
                    fotoPerfil: `${db.usuario[i].fotoPerfil}`,
                    nombreUsuario: `${db.usuario[i].nombreUsuario}`,

                })
            }
        },
    
 
}

module.exports = indexController;