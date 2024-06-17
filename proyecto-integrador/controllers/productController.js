
const db = require("../database/models");
const op = db.Sequelize.Op;
const product = db.Product;
const comentario = db.Comment;
const {validationResult} = require('express-validator')


const productController = {

    show: function (req, res) {
        let id = req.params.id;
        for (let i = 0; i < db.productos.length; i++) {
            if (id == db.productos[i].id) {
                return res.render('product', {
                    index: db.productos,
                    imagen: `${db.productos[i].imagen}`,
                    descripcion: `${db.productos[i].descripcion}`,
                    nombreProducto: `${db.productos[i].nombreProducto}`,
                    comment: db.comentarios,
                })
            }
        }
    },

    add: function (req, res) {
        const nombreUsuario = req.session.nombreUsuario
        return res.render('product-add', {
            mensaje: "Agregue el producto",
            nombreUsuario: nombreUsuario
        });
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
            res.render('search-results', { products: products, mensaje: `Resultados de búsqueda para '${query}'` });
        })
        .catch(function (error) {
            console.log(error);
            res.render('search-results', { products: [], mensaje: `Error al buscar productos para '${query}'` });
        });
    },

    create: function (req, res){
        
    },

    edit: function (req, res){
        const id = req.params.id;
        product.findByPk(id)
        .then(function(productData){
            res.render("product-edit", {product : productData})
        })
        .catch(function(error){
            console.log(error)
        })
    },

    store: function (req, res){
        const resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            return res.render('product-add', {
                errors : resultValidation.mapped(), 
                oldData : req.body});
        } else { 
            const product = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen
            };

        db.Product.create(product)
            .then(function(data){
                res.redirect('/')
            })
            .catch(function(error){
                console.log(error)
            })
        }
    },

    update: function (req, res){
        const id = req.params.id;
        const data = req.body;
        const product = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen
        }
        db.Product.update(product, {
            where: {
                id: id
            }
        })
        .then(function (data){
            res.redirect('/')
        })
        .catch(function (error){
            console.log(error)
       })
    },


}


module.exports = productController;