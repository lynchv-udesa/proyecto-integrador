const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }
    },
    login: function(req, res){    
        const resultValidation = validationResult(req)       
        if(!resultValidation.isEmpty()){
            console.log("resultValidation:", JSON.stringify(resultValidation,null,4));
            return res.render("login", { 
                errors: resultValidation.mapped(),
                oldData: req.body
             })
        } else {
            db.User.findOne({
                where: [{email: req.body.email}]
            })
            .then( function ( user ) {
                req.session.user = user;          
                if(req.body.checkbox != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                    console.log(res.cookie.userId)
                }
                return res.redirect('/');            
            })
            .catch( function(e) {
                console.log(e)
            })
        }
    },
    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    }
    
}

module.exports = loginController;