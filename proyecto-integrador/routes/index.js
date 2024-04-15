const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

router.get('/', indexController.index);
router.get('/profile', indexController.profile);
router.get("/profile/edit", indexController.edit);
router.get('/search/:nombreProducto', indexController.search);
//router.get('/search', indexController.search);
router.get("/register", indexController.register);
router.get("/login", indexController.login);




module.exports = router;
