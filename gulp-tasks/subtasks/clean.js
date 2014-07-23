'use strict';

var del = require('del');

module.exports = function (gulp) {
    gulp.task('clean', function (callback) {
        del(['./dist'], callback);
    });
};