'use strict';

var config = require('./config');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');
var gulpWatch = require('gulp-watch');

require('./subtasks/clean');
require('./subtasks/browserify');
require('./subtasks/less');
require('./subtasks/html');
require('./subtasks/moveLocalization');

gulp.task('watch', function () {

  var bundler = watchify(config.browserify.source);
  var makeBundle = require('./bundleHelper')(bundler);
  bundler.on('update', makeBundle);

  gulpWatch({glob: config.html.source}, function () {
    gulp.start('html');
  });

  gulpWatch({glob: config.localization.source}, function () {
    gulp.start('moveLocalization');
  });

  gulpWatch({glob: config.less.source}, function () {
    gulp.start('less');
  });

  nodemon({ script: config.nodemon.start, ext: config.nodemon.ext, watch: config.nodemon.source })
    .on('restart', function () {
      console.log('Server restarted!');
    });

  livereload.listen();

  return makeBundle();
});
