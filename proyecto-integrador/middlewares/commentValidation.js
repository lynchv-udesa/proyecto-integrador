const { body } = require("express-validator");

const commentValidation = [
    body("texto")
        .notEmpty()
        .withMessage("Debes agregar un comentario")
        .bail()
        .isLength({min:3}).withMessage("Debe tener al menos 3 caracteres"),
]

module.exports = commentValidation;