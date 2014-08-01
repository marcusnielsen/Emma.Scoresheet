'use strict';

var express = require('express');
var app = express();
// TODO: var favicon = require('static-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
// TODO: var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');
var livereload = require('connect-livereload');
var session = require('express-session');
var flash = require('connect-flash');

module.exports = function (config) {
  var env = app.get('env');
  app.use(morgan('dev'));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  //TODO: app.use(methodOverride());
  app.use(cookieParser());

  app.use(session({
    secret: config.secrets.session,
    saveUninitialized: true,
    resave: true
  }));

  var passport = require('../passport')(app);
  app.use(flash());

  // TODO: Only use this for development server.
  app.use(livereload());

  //TODO: app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  var serverViewRouter = express.Router();
  require('../views')(app, serverViewRouter, config);
  app.use('/', serverViewRouter);

  var appPath = path.join(config.root, 'dist');
  app.use('/dist', express.static(appPath));
  app.set('appPath', appPath);

  var apiRouter = express.Router();
  require('../../data-objects/index')(apiRouter, passport);
  app.use('/api', apiRouter);

  return app;
};
