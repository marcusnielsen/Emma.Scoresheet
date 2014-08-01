'use strict';

var config = require('./../config');
var browserify = require('browserify');
var gulp = require('gulp');

gulp.task('browserify', function () {
  var bundler = browserify(config.browserify.source);
  var makeBundle = require('./../bundleHelper')(bundler);
  return makeBundle();
});
