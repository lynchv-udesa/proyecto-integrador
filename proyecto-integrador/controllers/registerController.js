const bcrypt = require('bcryptjs');
const db = require('../database/models');
const moment = require('moment')
const {validationResult} = require('express-validator')

let registerController = {
    index: function(req,res){
        return res.render('register');
    },
    store: function(req,res) {
        const resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            return res.render('register', {
                errors : resultValidation.mapped(), 
                oldData : req.body});
        } else { 
            const formattedFechaNacimiento = moment(req.body.fechaNacimiento, 'YYYY-MM-DD').format('YYYY-MM-DD');
            const user = {
                email: req.body.email,
                nombreUsuario: req.body.user,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                fechaNacimiento: formattedFechaNacimiento,
                dni: req.body.dni,
                fotoPerfil: req.body.fotoPerfil,
            };
            db.User(user)
                .create(user)
                .then(function(user) {
                    return res.redirect("/login");
                })
                .catch(function(error) {
                    console.log("Error al guardar el usuario", error);
                });
        }
    }
};

module.exports = registerController;