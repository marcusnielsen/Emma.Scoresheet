'use strict';

var gulp = require('gulp');
var vinylSourceStream = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');

module.exports = function () {
    browserify('./client/app/app-module.js').bundle({debug: true})
        .pipe(vinylSourceStream('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/js'));

    gulp.src('./client/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(csso())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./client/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
};