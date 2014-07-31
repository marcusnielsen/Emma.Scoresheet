'use strict';

var config = require('./../config');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var csso = require('gulp-csso');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
    return gulp.src(config.less.source)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(csso())
        .pipe(sourcemaps.write(config.less.sourcemaps))
        .pipe(gulp.dest(config.less.dest))
        .pipe(livereload({auto: false}));
});
