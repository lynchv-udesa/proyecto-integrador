const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/:id', productController.show);
router.get('/add', productController.add);


module.exports = router;