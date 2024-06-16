const { body } = require("express-validator");
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const loginValidation = [
    body("email")
        .notEmpty()
        .isEmail()
        .withMessage("Debes completar el campo").bail()
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: value }
            })
                .then(function (user) {
                    if (!user) {
                        throw new Error("No existe el email ingresado ")
                    }
                })
        }).withMessage("el email ingresado no existe").bail(),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir un password").bail()
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: req.body.email }
            })
                .then(function (user) {
                    if (user) {
                        const password = user.password
                        const passOK = bcryptjs.compareSync(value, password)
                        if (!passOK) {
                            throw new Error("Contraseña incorrecta")
                        }
                    }
                })
        }).withMessage("La contraseña no es correcta").bail(),
]

module.exports = loginValidation;
