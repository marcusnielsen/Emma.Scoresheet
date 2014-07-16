'use strict';

var jshint = require('gulp-jshint');

module.exports = function (gulp) {
    gulp.task('lint', function () {
        gulp.src(['./**/*.js', '!./node_modules/**/*'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
};


