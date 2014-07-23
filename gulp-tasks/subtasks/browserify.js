'use strict';

var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

module.exports = function (gulp) {
    gulp.task('browserify', function () {
        return browserify('./client/app/app-module.js')
            .bundle({debug: true})
            .pipe(vinylSourceStream('bundle.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('./dist/js'));
    });
};