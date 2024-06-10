const {body} = require("express-validator")

const registerValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .bail()
        .isEmail().withMessage("Debes escribir un formato de correo valido"),
    body("user")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir un password")
        .bail()
        .isLength({min:8}).withMessage("El password debe tener minimo 8 caracteres"),
    body("birthDate")
        .optional()
        .isDate({format: 'yyyy-mm-dd'}),
    body("dni")
        .optional(),
    body("profilePic")
        .notEmpty().withMessage("Debes ingresar el nombre de la imagen")

]