'use strict';

var watchify = require('watchify');

module.exports = function (gulp) {
    gulp.task('watch', ['lint'], function () {
        var bundler = watchify('./client/app/app-module.js');
        var build = require('./build-helper');
        bundler.on('update', build);
        build();
    });
};