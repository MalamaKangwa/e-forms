var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nrcRouter = require('./routes/nrc');

var bodyParser = require('body-parser')
var startDbCon = require('./database/database_connect');
var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var ufp = bodyParser.urlencoded({ extended: false })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
startDbCon.Connect2db();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nrc', nrcRouter);

module.exports = app;
