'use strict';

module.exports = angular.module('mnSetting', [require('../user').name])
  .factory('mnSettingFactory', require('./setting-factory'))
  .controller('mnSettingController', require('./setting-controller'));
