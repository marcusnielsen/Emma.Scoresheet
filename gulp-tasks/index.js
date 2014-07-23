'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var dir = require('require-dir')();

module.exports = function () {
    _.forEach(dir, function (taskRequire) {
        taskRequire(gulp);
    });
};