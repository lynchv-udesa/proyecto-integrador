const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido")
        .custom(function(value, { req }) {
            return db.User.findOne({
                where: { email: value }
            })
            .then(function(user) {
                if (!user) {
                    throw new Error("El email no está registrado");
                }
            });
        }),
    body("contrasenia")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")
        .custom(function(value, { req }) {
            return db.User.findOne({
                where: { email: req.body.email}
            })
            .then(function(user) {
                if (user) {
                    const contrasenia = user.contrasenia
                    const contraseniaOk = bcryptjs.compareSync(value, contrasenia);
                    console.log("contraseña de base de datos : ", contrasenia)
                    console.log("contraseña de proporcionada : ", value)
                    console.log("Comparacionn de contraseñas : ", contraseniaOk)
                    if (!contraseniaOk) {
                        throw new Error("Contraseña incorrecta");
                    }
                }
            });
        })
];

module.exports = loginValidation;
