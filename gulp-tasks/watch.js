//TODO: add requires

module.exports = function (gulp) {
    gulp.task('watch', ['lint'], function () {
        var bundler = watchify('./client/app/app.js');

        var rebundle = function () {
            return bundler.bundle()
                .pipe(vinylSourceStream('bundle.js'))
                .pipe(streamify(uglify()))
                .pipe(gulp.dest('./dist'));
        };

        bundler.on('update', rebundle);

        return rebundle();
    });
};