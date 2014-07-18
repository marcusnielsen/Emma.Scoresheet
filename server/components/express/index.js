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

module.exports = function(config) {
    var env = app.get('env');
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    //TODO: app.use(methodOverride());
    app.use(cookieParser());

    //TODO: Fix deprecated warning before using.
    // require('../mongodb/mongoStore')(app, config);

    //TODO: app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    var serverViewRouter = express.Router();
    require('../views')(app, serverViewRouter, config);
    app.use('/', serverViewRouter);

    var appPath = path.join(config.root, 'dist');
    app.use('/dist', express.static(appPath));
    app.set('appPath', appPath);
    app.use(morgan('dev'));

    var isAuthenticated = require('../passport')(app).isAuthenticated;
    var apiRouter = express.Router();
    require('../../data-objects/index')(apiRouter, isAuthenticated);
    app.use('/api', apiRouter);

    return app;
};