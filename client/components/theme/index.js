'use strict';

module.exports = angular.module('mnTheme', [require('../../page-components/settings').name])
  .factory('mnThemeFactory', require('./theme-factory'));
