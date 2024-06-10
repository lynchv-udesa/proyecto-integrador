const {body} = require("express-validator");

const loginValidation = [
    body("email")
    .notEmpty().withMessage("Debes completar el campo")
    .isEmail().withMessage("Por favor ingrese un email válido"),
    body("password")
    .notEmpty()
    .withMessage("Debes introducir un password")
]