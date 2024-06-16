const bcrypt = require('bcryptjs');
const { body } = require("express-validator");
const db = require("../database/models");

const loginValidation = [
    body("email")
        .notEmpty()
        .isEmail()
        .withMessage("Debes completar el campo").bail()
        .custom(function (value, { req }) {
            return db.User.findOne({ where: { email: value } })
                .then(function (user) {
                    if (!user) {
                        throw new Error("No existe el email ingresado ");
                    }
                });
        }).withMessage("el email ingresado no existe").bail(),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir un password").bail()
        .custom(function (value, { req }) {
            return db.User.findOne({ where: { email: req.body.email } })
                .then(function (user) {
                    if (user) {
                        const password = user.contrasenia; 
                        const passOK = bcrypt.compareSync(value, password);
                        if (!passOK) {
                            throw new Error("Contraseña incorrecta");
                        }
                    } else {
                        console.log("Usuario no encontrado");
                    }
                }).catch(function (err) {
                    console.log("Error al buscar el usuario", err);
                });
        }).withMessage("La contraseña no es correcta").bail(),
];

module.exports = loginValidation;
