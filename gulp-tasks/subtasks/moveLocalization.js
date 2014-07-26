'use strict';

module.exports = function (gulp) {
    gulp.task('moveLocalization', function () {
        return gulp.src('./client/localization/**/*')
            .pipe(gulp.dest('./dist/localization/'));
    });
};