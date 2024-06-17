const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

const loginValidations = require("../middlewares/loginValidation");

router.get('/', loginController.index);
router.post('/', loginValidations, loginController.login);
router.post('/logout', loginController.logout)

module.exports = router;