'use strict';

module.exports = angular.module('mnMenu', [require('../../page-components/user').name])
  .factory('mnMenuFactory', require('./menu-factory'))
  .controller('mnMenuController', require('./menu-controller'))
  .directive('mnMenu', require('./menu-directive'));
