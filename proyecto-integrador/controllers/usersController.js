let db = require("../db/index");

const usersController = {

    profile: function(req,res){
                return res.render('profile', {
                    index: db.productos,
                    fotoPerfil: `${db.usuario[1].fotoPerfil}`,
                    nombreUsuario: `${db.usuario[1].nombreUsuario}`,
                })
            
        },

    edit: function(req,res){
        return res.render('profile-edit', {
            nombreUsuario: `${db.usuario[1].nombreUsuario}`
        });

    },

}

module.exports = usersController;