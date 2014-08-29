'use strict';

var config = require('./../config');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var csso = require('gulp-csso');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
  return gulp.src(config.css.lessSource)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(csso())
    .pipe(sourcemaps.write(config.css.sourcemaps))
    .pipe(gulp.dest(config.css.dest))
    .pipe(livereload({auto: false}));
});
