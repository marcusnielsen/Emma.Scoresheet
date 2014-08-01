'use strict';
var mnLogin = require('../login');

module.exports = angular.module('mnSettings', [mnLogin.name])
  .factory('mnSettingsFactory', require('./settings-factory'))
  .controller('mnSettingsController', require('./settings-controller'));
