'use strict';

module.exports = angular.module('mnPrimaryMenu', [])
  .value('mnPrimaryMenuTreeValue', require('./primary-menu-tree-value'))
  .factory('mnPrimaryMenuFactory', require('./primary-menu-factory'))
  .controller('mnPrimaryMenuController', require('./primary-menu-controller'))
  .directive('mnPrimaryMenu', require('./primary-menu-directive'));
