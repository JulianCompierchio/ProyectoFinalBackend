const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const dbConnection = require('./db/dbConnection');
const  indexRouter = require('./routes/index');
const  vuelosRouter = require('./routes/vuelos');

const  app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
0
app.use('/', indexRouter);
app.use('/vuelos', vuelosRouter);

require('dotenv').config();
dbConnection();

module.exports = app;
