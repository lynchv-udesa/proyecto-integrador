const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        //Mostramos el form de login
        return res.render('login');
    },
    login: function(req, res){    
        const resultValidation = validationResult(req)
        if(!resultValidation.isEmpty()){
            return res.render("login", { 
                errors: resultValidation.mapped(),
                oldData: req.body
             })
        } else {
            db.User.findOne({
                where: { email: req.body.email }
            })
            .then( function ( user ) {
                req.session.user = user;          
                if(req.body.checkbox != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
                }
                return res.redirect('/');            
            })
            .catch( function(e) {
                console.log(e)
            })
        }
    },

    
}

module.exports = loginController;