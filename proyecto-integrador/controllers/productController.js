
const db = require("../database/models");
const op = db.Sequelize.Op;
const {validationResult} = require('express-validator')


const productController = {


    show: function (req, res) {
        let id = req.params.id;

        db.Product.findByPk(id, {
            // includes de usuarios y comentarios
            include: [
                { association: 'usuarios' },
                { association: 'comentarios' }
            ]
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

    edit: function (req, res){
        if (req.session.user == undefined) {
            return res.redirect('/register');
        } else {
        const id = req.params.id;
        db.Product.findByPk(id)
        .then(function(productData){
            res.render("product-edit", {product : productData})
        })
        .catch(function(error){
            console.log(error)
        })}
    },

    store: function (req, res){
        const resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            return res.render('product-add', {
                errors : resultValidation.mapped(), 
                oldData : req.body});
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
        .then(function(data){
            return res.redirect('/');
        })
        .catch(function(error){
            console.log("Error al guardar el producto", error)
        })
        },

    update: function (req, res){
        const id = req.params.id;
        const data = req.body;
        const product = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen,
            idUsuario: "0"
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
            console.log("Error al guardar el producto", err)
       })
    },

    comment: function (req, res) {
        const resultValidation = validationResult(req);
        const productId = req.body.productId;
        if (!resultValidation.isEmpty()) {
            db.Product.findByPk(productId, {
                include: [
                    { association: 'usuarios' },
                    { association: 'comentarios' }
                ]
            })
            .then(data => {
                return res.render('product', {
                    producto: data,
                    errors: resultValidation.mapped(),
                    oldData: req.body
            });
            })
            .catch(error => {
                console.log("Error al recuperar el producto", error);
                return res.status(500).send("Error al recuperar el producto");
            });
  
        } else { 
            let nombreUsuario = req.session.user ? req.session.user.nombreUsuario : null; 
            let idUsuarioC = req.session.user ? req.session.user.id : null;
            let idProducto = req.params.id
            const comentario = {
                texto: req.body.texto,
                idUsuarioC: idUsuarioC, 
                idProducto: idProducto,
                nombre: nombreUsuario 
                 
            };
    
            db.Comment.create(comentario)
            .then(function(data){
                return res.redirect(`/product/${req.body.productId}`); 
            })
            .catch(function(error){
                console.log("Error al guardar el comentario", error);
                return res.status(500).send("Error al guardar el comentario");
            });
        }
    }
    


}


module.exports = productController;