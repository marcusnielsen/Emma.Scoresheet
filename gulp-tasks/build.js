'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

require('./subtasks/clean')(gulp);
require('./subtasks/browserify')(gulp);
require('./subtasks/less')(gulp);
require('./subtasks/html')(gulp);
require('./subtasks/moveLocalization')(gulp);

module.exports = function (gulp) {
    gulp.task('build', function (callback) {
        runSequence('clean', ['browserify', 'less', 'html', 'moveLocalization'], callback);
    });
};