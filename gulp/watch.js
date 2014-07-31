'use strict';

var config = require('./config');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');

require('./subtasks/clean');
require('./subtasks/browserify');
require('./subtasks/less');
require('./subtasks/html');
require('./subtasks/moveLocalization');

gulp.task('watch', function () {

    var bundler = watchify(config.browserify.source);
    var makeBundle = require('./bundleHelper')(bundler);
    bundler.on('update', makeBundle);

    gulp.watch(config.html.source, ['html']);
    gulp.watch(config.localization.source, ['moveLocalization']);
    gulp.watch(config.less.source, ['less']);

    nodemon({ script: config.nodemon.start, ext: config.nodemon.ext, watch: config.nodemon.source })
        .on('restart', function () {
            console.log('Server restarted!');
        });

    livereload.listen();

    return makeBundle();
});
