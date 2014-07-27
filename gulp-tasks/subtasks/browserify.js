'use strict';

var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');

module.exports = function (gulp) {
    gulp.task('browserify', function () {
        var bundler = browserify('./client/app/app-module.js');

        bundler.transform({
            global: true
        }, 'uglifyify');

        return bundler
            .bundle({debug: true})
            .pipe(vinylSourceStream('bundle.js'))
            .pipe(gulp.dest('./dist/js'));
    });
};
