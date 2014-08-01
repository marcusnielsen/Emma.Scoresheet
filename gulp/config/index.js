'use strict';

var config = {
  'clean': './dist',
  'nodemon': {
    'start': './server/server.js',
    'source': './server',
    'ext': 'html js'
  },
  'browserify': {
    'source': './client/app-module.js',
    'dest': {
      'filename': 'bundle.js',
      'path': './dist/js'
    }
  },
  'html': {
    'source': './client/**/*.html',
    'dest': './dist/html'
  },
  'less': {
    'source': './client/**/*.less',
    'dest': './dist/css',
    'sourcemaps': './maps'
  },
  'localization': {
    'source': './client/localization/**/*',
    'dest': './dist/localization'
  },
  'lint': {
    //TODO: Enable linting for tests when tests are stable.
    'source': ['!./node_modules/**/*', '!./dist/**/*', '!./server/test/**/*', './**/*.js']
  }
};

module.exports = config;
