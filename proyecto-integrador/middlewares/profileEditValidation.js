const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const profileEditValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .bail()
        .isEmail().withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if(user){
                    throw new Error('El email ingresado ya existe')
                }
            })
        }).withMessage('El email ingresado ya existe'),

    body("nombreUsuario")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),

    body("contrasenia")
        .optional()
        .isLength({min:4}).withMessage("El password debe tener minimo 4 caracteres"),

    body("fechaNacimiento")
        .optional(),

    body("dni")
        .optional()
        .bail()
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: req.body.dni}
            })
            .then(function(user){
                if(user){
                    throw new Error('El dni ingresado ya existe')
                }
            })
        }).withMessage('El dni ingresado ya existe'),
        
];

module.exports = profileEditValidation;