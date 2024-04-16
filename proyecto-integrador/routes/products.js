const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/add', productController.add);
router.get('/:id', productController.show);
router.get("/search/:nombreProducto", productController.search)


module.exports = router;