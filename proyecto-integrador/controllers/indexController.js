let db = require("../db/index");

const indexController = {
    
    index: function(req,res){
        return res.render('index', {
            index: db.productos,
        })
    },

    login: function(req,res){
        return res.render('login')
    },

    register: function(req,res){
        return res.render('register')
    },


};

    
 

module.exports = indexController;
