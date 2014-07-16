var _ = require('lodash');
var gulp = require('gulp');

module.exports = function () {
    var dir = require('require-dir')();

    _.forEach(dir, function (taskRequire) {
        taskRequire(gulp);
    });
};