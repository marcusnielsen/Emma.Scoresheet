'use strict';

var rimraf = require('gulp-rimraf');

module.exports = function (gulp) {
    gulp.task('clean', function () {
        gulp.src('./dist/**/*', {read: false})
            .pipe(rimraf());
    });
};