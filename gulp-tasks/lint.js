'use strict';

var jshint = require('gulp-jshint');

module.exports = function (gulp) {
    gulp.task('lint', function () {
        return gulp.src(['!./node_modules/**/*', '!./dist/**/*', './**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
};


