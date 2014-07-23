'use strict';

module.exports = function (gulp) {
    gulp.task('move', function () {
        return gulp.src('./client/localization/**/*')
            .pipe(gulp.dest('./dist/localization/'));
    });
};