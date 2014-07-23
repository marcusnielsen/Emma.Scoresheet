'use strict';

var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var csso = require('gulp-csso');

module.exports = function (gulp) {
    gulp.task('less', function () {
        return gulp.src('./client/**/*.less')
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(csso())
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./dist/css'));
    });
};
