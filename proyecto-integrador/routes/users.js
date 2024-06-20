var express = require('express');
const usersController = require('../controllers/usersController');
const profileEditValidation = require('../middlewares/profileEditValidation');
var router = express.Router();

const profileValidations = require("../middlewares/profileEditValidation");

router.get('/profile/:id', usersController.profile);
router.get("/profile/edit/:id", usersController.index)
router.post("/profile/edit/:id", profileValidations, usersController.edit);



module.exports = router;
