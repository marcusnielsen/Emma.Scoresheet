'use strict';

module.exports = angular.module('mnTheme', [require('../../page-components/setting').name])
  .factory('mnThemeFactory', require('./theme-factory'));
