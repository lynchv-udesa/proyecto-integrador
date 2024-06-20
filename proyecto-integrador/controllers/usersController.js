const bcrypt = require('bcryptjs');
const db = require('../database/models');
const moment = require('moment')
const {validationResult} = require('express-validator')

const usersController = {


    profile: function (req, res) {


        const userId = req.params.id;

        db.User.findByPk(userId, {
            include: [{ model: db.Product, as: 'productos', order: [['createdAt', 'DESC']] }]
        })
            .then(function (usuario) {
                if (!usuario) {
                    return res.status(404).send("Usuario no encontrado");
                }

                db.Product.findAll({
                    where: { idUsuario: userId },
                    order: [['createdAt', 'DESC']]
                })

                    .then(function (productos) {
                        res.render('profile', { usuario: usuario, productos: productos });
                    })

                    .catch(function (err) {
                        console.log(err);
                        res.status(500).send("Error al obtener los productos del usuario.");
                    });
            })
            .catch(function (err) {
                console.log(err);
                res.status(500).send("Error al obtener el usuario.");
            });
    },

    index: function (req, res) {
        const userId = req.params.id;

        db.User.findByPk(userId)
            .then(function (usuario) {
                if (!usuario) {
                    return res.status(404).send("Usuario no encontrado");
                }
                res.render('profile-edit', { usuario: usuario });
            })
            .catch(function (err) {
                console.log(err);
                res.status(500).send("Error al obtener el usuario.");
            });
    },

    edit: function (req, res) {
        const resultValidation = validationResult(req)
        const userId = req.params.id
        if (!resultValidation.isEmpty()) {
            return res.render('profile-edit', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                usuario: req.user
            });
        } else {
            const formattedFechaNacimiento = moment(req.body.fechaNacimiento, 'YYYY-MM-DD').format('YYYY-MM-DD');
            const user = {
                email: req.body.email,
                nombreUsuario: req.body.nombreUsuario,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                fechaNacimiento: formattedFechaNacimiento,
                dni: req.body.dni,
            };

            db.User.update(user, { where: { id: userId } }) 
            .then(function () {
                return res.redirect("/users/profile/" + userId); 
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
                res.status(500).send("Error al guardar el usuario."); 
            });
        }
    },


}

module.exports = usersController;