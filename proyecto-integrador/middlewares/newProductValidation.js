const {body} = require("express-validator")

const newProductValidations = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes agregar una imagen"),
    body("nombre")
        .notEmpty()
        .withMessage("Debes completar el nombre del producto"),
    body("descripcion")
        .notEmpty()
        .withMessage("Debes introducir una descripcion")
        .bail()
        .isLength({min:8}).withMessage("La descripcion debe tener mas de 8 caracteres"),

]

module.exports = newProductValidations;