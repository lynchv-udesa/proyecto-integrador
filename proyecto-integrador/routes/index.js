const express = require('express');
const router = express.Router();

//router.get('/', indexController.index);
//router.get('/profile', indexController.profile);
//router.get('/profile/edit', indexController.edit);
//router.get('/search', indexController.search);
//router.get('/login', indexController.login);
//router.get('/register', indexController.register);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


module.exports = router;
