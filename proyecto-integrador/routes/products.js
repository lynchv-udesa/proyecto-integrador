const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/add', productController.add);
router.get('/search', productController.search);
router.get('/:id', productController.show);

// Rutas de los formularios

router.post('/store', productController.store);
router.post('/update/:id', productController.update);

module.exports = router;


