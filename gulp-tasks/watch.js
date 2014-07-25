'use strict';

var gulp = require('gulp');
var vinylSourceStream = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var livereload = require('gulp-livereload');
var watchify = require('watchify');

require('./subtasks/clean')(gulp);
require('./subtasks/browserify')(gulp);
require('./subtasks/less')(gulp);
require('./subtasks/html')(gulp);
require('./subtasks/move')(gulp);

module.exports = function (gulp) {
    gulp.task('watch', function () {
        /*var buildSequence = function () {
            runSequence('clean', ['browserify', 'less', 'html', 'move']);
        };*/

        var bundler = watchify('./client/app/app-module.js');
        
        var rebundle = function () {
            return bundler.bundle({debug: true})
                .pipe(vinylSourceStream('bundle.js'))
                .pipe(streamify(uglify()))
                .pipe(gulp.dest('./dist/js'))
                .pipe(livereload());
        };
        
        bundler.on('update', rebundle);
        
        require('../server/server');
        
        return rebundle();
    });
};