const db = require('../database/models');
const op = db.Sequelize.Op

const usersController = {


   profile: function (req, res) {
    let usuario = req.session.user;

    db.User.findByPk(req.session.user.id, {
        include: [{ model: db.Product, as: 'products', order: [['createdAt', 'DESC']] }]
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