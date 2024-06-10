const bcrypt = require('bcryptjs');
const db = require('../database/models');
const {validationResults} = require('express-validator')

let registerController = {
    index: function(req,res){
        return res.render('register');
    },
    store: function(req,res) {
        const resultValidation = validationResults(req)
        if(!resultValidation.isEmpty()){
            return res.render('register', {errors : resultValidation.mapped(), oldData : req.body})
        } else {
            const user = {
                email: req.body.email,
                user: req.body.user,
                password: bcrypt.hashSync(req.body.password, 10),
                birthDate: req.body.birthDate,
                dni: req.body.dni,
                profilePic: req.body.profilePic,
            };
            db.User(user)
        }
    }
}