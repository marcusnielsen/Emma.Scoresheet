'use strict';

var jshint = require('gulp-jshint');

module.exports = function (gulp) {
    gulp.task('lint', function () {
        gulp.src(['!./node_modules/**/*', '!./dist/**/*', './**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
};


