let db = require("../db/index");

const usersController = {

    profile: function(req,res){
        for(let i=0; i < 1; i++){
                return res.render('profile', {
                    index: db.usuario,
                    fotoPerfil: `${db.usuario[i].fotoPerfil}`,
                    nombreUsuario: `${db.usuario[i].nombreUsuario}`,
                })
            }
        },

    edit: function(req,res){
        return res.render('profile-edit');
    },


}

module.exports = usersController;