var config = require('./../config');
var vinylSourceStream = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var gulp = require('gulp');

var bundleHelper = function (bundler) {
    //TODO: Fix non-minimized source maps.
    bundler.transform({
        global: true
    }, 'uglifyify');

    var makeBundle = function () {
        bundler
            .bundle({debug: true})
            .pipe(vinylSourceStream(config.browserify.dest.filename))
            .pipe(gulp.dest(config.browserify.dest.path))
            .pipe(livereload({auto: false}));
    };

    return makeBundle;
};

module.exports = bundleHelper;
