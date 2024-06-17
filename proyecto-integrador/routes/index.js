const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

router.get('/', indexController.index);
router.get("/register", indexController.register);
<<<<<<< HEAD
=======
router.get("/login", indexController.login);
router.get("/add", indexController.add);
>>>>>>> 81283dfe7c505cf2086aa816b593557b4cf38bce




module.exports = router;
