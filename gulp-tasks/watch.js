'use strict';

var watchify = require('watchify');

module.exports = function (gulp) {
    gulp.task('watch', ['lint'], function () {
        var bundler = watchify('./client/app/app.js');
        var build = require('./build-helper');
        bundler.on('update', build);
        build();
    });
};