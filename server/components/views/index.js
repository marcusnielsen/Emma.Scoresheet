'use strict';

module.exports = function (app, router, config) {
    var swig = require('swig');
    app.engine('html', swig.renderFile);
    app.set('views', __dirname);


    router.get('/', function (req, res) {
        res.render('index.server.html');
    });

    router.get('/404', function (req, res) {
        res.render('404.server.html', {message: 'The path was not found.'});
    });
};