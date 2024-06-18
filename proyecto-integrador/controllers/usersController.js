const db = require('../database/models');
const op = db.Sequelize.Op

const usersController = {


   profile: function (req, res) {
 
    
    const userId = req.params.id;

    db.User.findByPk(userId, {
        include: [{ model: db.Product, as: 'productos', order: [['createdAt', 'DESC']] }]
    })
    .then(function(usuario) {
        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        db.Product.findAll({
            where: { idUsuario: userId },
            order: [['createdAt', 'DESC']]
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