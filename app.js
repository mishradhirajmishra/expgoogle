const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./database/connection');
const key=require('./config/key');
const passport = require('passport');
const passportSetup=require('./config/passport-google-setting');
const cookieSession = require('cookie-session');

const app = express();
// set up session cookies
// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['fffgffdfgggh']
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*================================================================================================================*/
app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/images',express.static(__dirname + 'public/images'));
app.use('/stylesheets',express.static(__dirname + 'public/stylesheets'));
/*================================================================================================================*/

app.use('/', require('./routes/index-router'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth-router'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
