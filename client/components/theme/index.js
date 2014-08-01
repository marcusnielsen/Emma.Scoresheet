'use strict';

module.exports = angular.module('mnTheme', [require('../../views/settings').name])
  .factory('mnThemeFactory', require('./theme-factory'));
