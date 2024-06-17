const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        // Mostramos el form de login
        return res.render('login');
    },
    login: function(req, res){    
        const resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            return res.render("login", { 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            db.User.findOne({
                where: { email: req.body.email }
            })
            .then(function(user) {
                if (!user) {
                    return res.render("login", {
                        errors: {
                            email: {
                                msg: "El email no está registrado"
                            }
                        },
                        oldData: req.body
                    });
                }

                // Verificar la contraseña usando bcrypt
                const contraseniaOk = bcryptjs.compareSync(req.body.contrasenia, user.contrasenia);

                console.log("Contraseña proporcionada:", req.body.contrasenia);
                console.log("Contraseña en la base de datos:", user.contrasenia);
                console.log("Resultado de la comparación:", contraseniaOk);

                if (!contraseniaOk) {
                    return res.render("login", {
                        errors: {
                            contrasenia: {
                                msg: "Contraseña incorrecta"
                            }
                        },
                        oldData: req.body
                    });
                }

                req.session.user = user;          
                if(req.body.checkbox != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100});
                }
                return res.redirect('/');            
            })
            .catch(function(e) {
                console.log(e);
                return res.render("login", {
                    errors: {
                        email: {
                            msg: "Error en el servidor. Por favor, intente de nuevo más tarde."
                        }
                    },
                    oldData: req.body
                });
            });
        }
    },
}

module.exports = loginController;
