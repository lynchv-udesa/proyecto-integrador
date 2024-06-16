//let db = require('../db/index');
const db = require("../database/models");
const op = db.Sequelize.Op;
const product = db.Product;
const comentario = db.Comment;
const {validationResults} = require('express-validator')


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
        return res.render('product-add', {
            nombreUsuario: `${db.usuario[1].nombreUsuario}`,
            mensaje: "Agregue el producto"
        });
    },


   // search: function (req, res) {
     //   const search = req.query.search;
       // if (search) {
        //    return res.redirect(`/product/search/${search}`)
        //} else {
          //  return res.render("search-results")
     //   }
   // },

    search: function (req, res){
        //El buscador funciona con querystrings
        const query = req.query.search;
        product.findAll({
            //busca un elemento que cumpla al menos una de las condiciones
            where: {
                [op.or]: [
                    { nombre: { [op.like]: `%${query}%` } },
                    { descripcion: { [op.like]: `%${query}%` } }
                ]
            }
        })
        .then(function(data){
            res.render('search-results', { products : data})
        })
        .catch(function(error){
            console.log(error)
        })
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
        const resultValidation = validationResults(req)
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

 //   producto: function (req, res) {
   //     let producto = req.params.producto.toUpperCase();
     //   let productoBusqueda = decodeURIComponent(producto)
       // let resultado = [];
        //for (let i = 0; i < db.productos.length; i++) {
          //  if (productoBusqueda == db.productos[i].nombreProducto) {
            //    resultado.push(db.productos[i])
            //}
        //}

        //if (resultado.length == 0) {
          //  return res.render("search-results", {
            //    index: resultado,
              //  mensaje: "No se encontraron resultados"
            //})
        //} else {
          //  return res.render("search-results", {
            //    index: resultado,
              //  mensaje: "Resultados de la busqueda"

            //})
        //}
    //}
}


module.exports = productController;