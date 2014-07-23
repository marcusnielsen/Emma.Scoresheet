'use strict';

var htmlmin = require('gulp-htmlmin');

module.exports = function (gulp) {
    gulp.task('html', function () {
        return gulp.src('./client/**/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('./dist/'));
    });
};