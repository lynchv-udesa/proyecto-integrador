const { body } = require("express-validator");

const loginValidation = [
    body("email")
        .notEmpty().withMessage("Debes completar el campo")
        .isEmail().withMessage("Por favor ingrese un email válido")
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: req.body.email }
            })
                .then(function (user) {
                    if (!user) {
                        throw new error("No existe el email ingresado ")
                    }
                })
        }).withMessage("el email ingresado no existe"),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir un password")
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
        }).withMessage("La contraseña no es correcta"),
]

module.exports = loginValidation;