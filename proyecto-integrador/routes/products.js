const express = require('express');
const productController = require('../controllers/productController');
const productValidations = require("../middlewares/newProductValidation");
const productEditValidations = require("../middlewares/productEditValidation");
const commentValidations = require("../middlewares/commentValidation");
const router = express.Router();

router.get('/create', productController.create);
router.post('/store', productValidations ,productController.store);

router.get('/edit/:id', productController.edit);
router.post('/update/:id', productEditValidations , productController.update);
router.post('/destroy/:id', productController.destroy);

router.post('/saveComment', commentValidations , productController.comment);

router.get('/search', productController.search);
router.get('/:id', productController.show);



module.exports = router;


