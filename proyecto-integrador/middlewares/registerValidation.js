const {body} = require("express-validator")

const registerValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .bail()
        .isEmail().withMessage("Debes escribir un formato de correo valido"),
    body("nombreUsuario")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),
    body("contrasenia")
        .notEmpty()
        .withMessage("Debes introducir un password")
        .bail()
        .isLength({min:8}).withMessage("El password debe tener minimo 8 caracteres"),
    body("fechaNacimiento")
        .optional(),
    body("dni")
        .optional(),
    body("fotoPerfil")
        .notEmpty().withMessage("Debes ingresar el nombre de la imagen")

]