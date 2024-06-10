//let db = require('../db/index');
const db = require("../database/models");
const op = db.Sequelize.Op;
const product = db.Product;
const comentario = db.Comment;


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
        const query = req.query.serach;
        product.findAll({
            where: {
                nombre: {[db.Sequelize.Op.like]: `%${query}`},
                descripcion: {[db.Sequelize.Op.like]: `%${query}`},
            }
        })
        .then(function(data){
            res.render('search-results', { productos : data})
        })
        .catch(function(error){
            console.log(error)
           })
    },


    producto: function (req, res) {
        let producto = req.params.producto.toUpperCase();
        let productoBusqueda = decodeURIComponent(producto)
        let resultado = [];
        for (let i = 0; i < db.productos.length; i++) {
            if (productoBusqueda == db.productos[i].nombreProducto) {
                resultado.push(db.productos[i])
            }
        }

        if (resultado.length == 0) {
            return res.render("search-results", {
                index: resultado,
                mensaje: "No se encontraron resultados"
            })
        } else {
            return res.render("search-results", {
                index: resultado,
                mensaje: "Resultados de la busqueda"

            })
        }
    }
}


module.exports = productController;