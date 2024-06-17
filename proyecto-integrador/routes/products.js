const express = require('express');
const productController = require('../controllers/productController');
const productValidations = require("../middlewares/newProductValidation");
const commentValidations = require("../middlewares/commentValidation");
const router = express.Router();

router.get('/create', productController.create);
router.get('/search', productController.search);
router.get('/:id', productController.show);

// Rutas de los formularios



router.post('/store', productValidations ,productController.store);
router.post('/update/:id', productValidations , productController.update);
router.post('/saveComment', commentValidations , productController.comment);


module.exports = router;


