'use strict';

var gulp = require('gulp');
var vinylSourceStream = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');

require('./subtasks/clean')(gulp);
require('./subtasks/browserify')(gulp);
require('./subtasks/less')(gulp);
require('./subtasks/html')(gulp);
require('./subtasks/moveLocalization')(gulp);

module.exports = function (gulp) {
    gulp.task('watch', function () {

        var bundler = watchify('./client/app/app-module.js');

        bundler.transform({
            global: true
        }, 'uglifyify');

        var rebundle = function () {
            return bundler.bundle({debug: true})
                .pipe(vinylSourceStream('bundle.js'))
                .pipe(gulp.dest('./dist/js'))
                .pipe(livereload());
        };

        nodemon({ script: './server/server.js', ext: 'html js', watch: './server/' })
            //.on('change', ['lint'])
            .on('restart', function () {
                console.log('Server restarted!');
            });

        bundler.on('update', rebundle);

        // require('../server/server');

        return rebundle();
    });
};
