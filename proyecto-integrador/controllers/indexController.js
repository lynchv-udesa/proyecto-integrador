let db = require("../db/index");

const indexController = {
    
    index: function(req,res){
        return res.render('index', {
            index: db.productos,
        })
    },

    login: function(req,res){
        return res.render('login')
    },

    register: function(req,res){
        return res.render('register')
    },

    profile: function(req,res){
        for(let i=0; i < 1; i++){
                return res.render('usuario', {
                    index: db.usuario,
                    fotoPerfil: `${db.usuario[i].fotoPerfil}`,
                    nombreUsuario: `${db.usuario[i].nombreUsuario}`,
                })
            }
        },

    edit: function(req,res){
        return res.render('profile-edit');
    },
    
    search: function(req,res) {
        let nombreProducto = req.query.nombreProducto; 
        if (nombreProducto) {
            return res.redirect(`/search-results/${nombreProducto}`)
        } else {
            return res.render("nombreProducto", {
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
                return res.render('producto', {
                    index: db.productos,
                    imagen: `${db.productos[i].imagen}`,
                    descripcion: `${db.productos[i].descripcion}`,
                    nombreProducto: `${db.productos[i].nombreProducto}`,
                    id: `${db.productos[i].id}`,
                })}
                
                else{
                    return res.render('producto', {
                        mensaje: "No se encontraron resultados para"
                    })
                }
            }
    
    };
 

module.exports = indexController;