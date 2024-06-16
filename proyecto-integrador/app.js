var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require("express-session")
var cookieParser = require('cookie-parser');
var logger = require('morgan');


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');
let registerRouter = require('./routes/register');
let loginRouter = require('./routes/login')
// importa los modelos para dsp hacer la cookie
let db = require('./database/models');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Aca va el session
app.use(session(
  {
    secret: "proyecto",
    resave: false,
    saveUninitialized: true
  }
))

app.use(function(req,res,next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    return next()
  }
  return next()
})

//Aca se gestiona la cookie
app.use(function(req,res,next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;

    db.User.findByPk(idDeLaCookie)
    .then( function(user){
      req.session.user = user
      res.locals.user = user;
      return next()
    })    
    .catch(function(err){
      console.log("error en cookies", err)
    })
  } else {
    return next()
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);
app.use('/login', loginRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
