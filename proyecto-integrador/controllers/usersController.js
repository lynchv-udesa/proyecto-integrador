const db = require('../database/models');
const op = db.Sequelize.Op

const usersController = {

   // profile: function (req, res) {
   //     return res.render('profile', {
   //         index: db.productos,
   //         fotoPerfil: `${db.usuario[1].fotoPerfil}`,
   //         nombreUsuario: `${db.usuario[1].nombreUsuario}`,
   //     })

   // },

   profile: function (req, res) {
    let usuario = req.session.user;

    db.User.findOne({
        where: { nombreUsuario: { [op.like]: usuario } },
        include: [
            { association: 'productos' },
            { association: 'comentarios' }
        ]
    })
    .then(function(usuario) {
        let id = usuario.id;
        db.Product.findAll({
            where: { idUsuario: { [op.like]: id } },
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(function(productos) {
            res.render('profile', { usuario: usuario, productos: productos });
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send("Error al obtener los productos del usuario.");
        });
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send("Error al obtener el usuario.");
    });
},


    edit: function (req, res) {
        return res.render('profile-edit', {
            nombreUsuario: `${db.usuario[1].nombreUsuario}`
        });

    },

}

module.exports = usersController;