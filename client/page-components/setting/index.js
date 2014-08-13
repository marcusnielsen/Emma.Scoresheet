'use strict';
var mnLogin = require('../login');

module.exports = angular.module('mnSetting', [mnLogin.name])
  .factory('mnSettingFactory', require('./setting-factory'))
  .controller('mnSettingController', require('./setting-controller'));
