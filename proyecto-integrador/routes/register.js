const express = require('express');
const registerController = require('../controllers/registerController');
const router = express.Router();

const registerValidations = require("../middlewares/registerValidation");

router.get('/', registerController.index);
router.post('/', registerValidations, registerController.store);

module.exports = router;