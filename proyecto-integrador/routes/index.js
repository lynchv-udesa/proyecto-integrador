const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

router.get('/', indexController.index);
<<<<<<< HEAD
=======
//router.get('/search/:nombreProducto', indexController.search);
//router.get('/search', indexController.search);
>>>>>>> 358bd11e3698b3794a9279f48e2dbb062cf2a3ae
router.get("/register", indexController.register);
router.get("/login", indexController.login);




module.exports = router;
