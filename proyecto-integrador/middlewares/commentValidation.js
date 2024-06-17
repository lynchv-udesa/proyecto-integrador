const { body } = require("express-validator");

const commentValidation = [
    body("comentario")
        .notEmpty()
        .withMessage("Debes agregar un comentario")
        .bail()
        .isLength({min:3}).withMessage("Debe tener al menos 3 caracteres"),
]

module.exports = commentValidation;