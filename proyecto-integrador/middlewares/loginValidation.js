const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: value }
            })
                .then(function (user) {
                    if (!userToLogin) {
                        throw new Error("El email no esta registrado")
                    }
                })
        }
        ),
    body("contrasenia")
        .notEmpty()
        .withMessage("Debes introducir una contraseña").bail()
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: req.body.email }
            })
                .then(function (user) {
                    if (user) {
                        const contrasenia = user.contrasenia
                        const contraseniaOk = bcryptjs.compareSync(value, contrasenia);
                        console.log("Contraseña proporcionada:", value);
                        console.log("Contraseña en la base de datos:", user.contrasenia);
                        console.log("Resultado de la comparación:", contraseniaOk);
                        if (!contraseniaOk) {
                            throw new Error("Contraseña incorrecta");
                        }
                    }
                })
        })
];

module.exports = loginValidation;
