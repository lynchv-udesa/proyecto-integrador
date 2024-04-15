var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', usersController.profile);

router.get('/profile', function(req, res, next) {
  for(let i=0; i < 1; i++){
    return res.render('profile', {
        nombreUsuario: `${db.usuario[i].nombreUsuario}`,
    })
}},
);

module.exports = router;
