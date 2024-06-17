var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();


router.get('/profile/:id', usersController.profile);
router.get("/profile/edit", usersController.edit);



module.exports = router;
