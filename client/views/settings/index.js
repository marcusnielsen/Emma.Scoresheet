'use strict';
var mnTheme = require('../../components/theme');

module.exports = angular.module('mnSettings', [mnTheme.name])
  .factory('mnSettingsFactory', require('./settings-factory'))
  .controller('mnSettingsController', require('./settings-controller'));
