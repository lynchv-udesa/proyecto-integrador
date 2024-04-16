const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/add', productController.add);
router.get('/:id', productController.show);
<<<<<<< HEAD
router.get("/search/:nombreProducto", productController.search)
=======
router.get('/product/search-results/:nombreProducto', productController.search);
>>>>>>> 358bd11e3698b3794a9279f48e2dbb062cf2a3ae


module.exports = router;