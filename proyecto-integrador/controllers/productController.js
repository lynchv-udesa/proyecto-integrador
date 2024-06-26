
const db = require("../database/models");
const op = db.Sequelize.Op;
const { validationResult } = require('express-validator')


const productController = {


    show: function (req, res) {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [
                { association: 'usuarios' },
                {
                    association: 'comentarios',
                    include: [{ association: 'usuarios' }]
                }
            ],
            order: [
                ["createdAt", "DESC"]
            ],
        })
            .then(data => {
                return res.render('product', { producto: data, user: req.session.user });
            })
            .then(data => {
                //console.log("producto por id: ", JSON.stringify(data,null, 4))
                return res.render('product', { producto: data });
            })
            .catch(error => {
                console.log(error);
            })
    },


    search: function (req, res) {
        const query = req.query.search;

        db.Product.findAll({
            where: {
                [op.or]: [
                    { nombre: { [op.like]: `%${query}%` } },
                    { descripcion: { [op.like]: `%${query}%` } }
                ]
            }
        })
            .then(function (products) {
                res.render('search-results', { productos: products, mensaje: `Resultados de búsqueda para '${query}'` });
            })
            .catch(function (error) {
                console.log(error);
                res.render('search-results', { productos: [], mensaje: `Error al buscar productos para '${query}'` });
            });
    },

    create: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/register');
        } else {
            return res.render('product-add', {
                mensaje: "Agregue el producto",
                nombreUsuario: req.session.user.nombreUsuario
            });
        }
    },

    store: function (req, res) {
        const resultValidation = validationResult(req)
        if (!resultValidation.isEmpty()) {
            return res.render('product-add', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }


        let data = req.body;
        let idUsuario = req.session.user ? req.session.user.id : null;
        const product = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen,
            idUsuario: idUsuario
        };

        db.Product.create(product)
            .then(function (data) {
                return res.redirect('/');
            })
            .catch(function (error) {
                console.log("Error al guardar el producto", error)
            })
    },

    edit: function (req, res) {

        if (req.session.user == undefined) {
            return res.redirect('/register');

        } else {
            let id = req.params.id;
            db.Product.findByPk(id, {
                include: [
                    { association: 'usuarios' }
                ]
            })
                .then(productos => {
                    if (productos && productos.idUsuario === req.session.user.id) {
                        return res.render('product-edit', { producto: productos })
                    } else {
                        return res.redirect('/');
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    },

    update: function (req, res) {
        const resultValidation = validationResult(req)
        let id = req.params.id
        if (!resultValidation.isEmpty()) {
            db.Product.findByPk(id)
                .then(producto => {
                    return res.render('product-edit', {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        producto: producto,
                        user: req.session.user,
                        mensaje: "Debes completar todos los campos"
                    })
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            let data = req.body;
            let idUsuario = req.session.user ? req.session.user.id : null;
            const product = {
                nombre: data.nombre,
                descripcion: data.descripcion,
                imagen: data.imagen,
                idUsuario: idUsuario
            };
            db.Product.update(product, {
                where: {
                    id: id
                }
            })
                .then(function (data) {
                    res.redirect('/')
                })
                .catch(function (error) {
                    console.log("Error al guardar el producto", err)
                })}
    },

    destroy: function (req, res) {
        let productoABorrar = req.params.id;


        db.Comment.destroy({
            where: {
                idProducto: productoABorrar
            }
        })
            .then(() => {

                db.Product.destroy({
                    where: {
                        id: productoABorrar
                    }
                })
                    .then(() => {
                        return res.redirect('/');
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    },

    comment: function (req, res) {
        const resultValidation = validationResult(req);
        let data = req.body;
        let idProducto = req.body.productId;
        if (!resultValidation.isEmpty()) {
            db.Product.findByPk(idProducto, {
                include: [
                    { association: 'usuarios' },
                    {
                        association: 'comentarios',
                        include: [{ association: 'usuarios' }]
                    }
                ]
            })
                .then(producto => {
                    return res.render('product', {
                        producto: producto,
                        errors: resultValidation.mapped(),
                        oldData: req.body
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            let nombreUsuario = req.session.user ? req.session.user.nombreUsuario : null;
            let idUsuario = req.session.user ? req.session.user.id : null;

            const comentario = {
                texto: req.body.texto,
                idUsuarioC: idUsuario,
                idProducto: idProducto,
                nombre: nombreUsuario
            };

            db.Comment.create(comentario)
                .then(function (data) {
                    return res.redirect('/products/' + idProducto);
                })
                .catch(function (error) {
                    console.log("Error al guardar el comentario", error);
                });
        }
    }
};


module.exports = productController;