'use strict';

module.exports = angular.module('mnSecondaryMenu', [])
  .value('mnSecondaryMenuTreeValue', require('./secondary-menu-tree-value'))
  .factory('mnSecondaryMenuFactory', require('./secondary-menu-factory'))
  .controller('mnSecondaryMenuController', require('./secondary-menu-controller'))
  .directive('mnSecondaryMenu', require('./secondary-menu-directive'));
