'use strict';

module.exports = function (gulp) {
    gulp.task('build', ['clean'], require('./build-helper'));
};