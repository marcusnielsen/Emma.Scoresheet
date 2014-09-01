'use strict';

//TODO: Menu should be under page-components / gui-components.
module.exports = angular.module('mnMenu', [require('../../page-components/user').name])
  .value('mnMenuTreeValue', require('./menu-states-value'))
  .factory('mnMenuFactory', require('./menu-factory'))
  .controller('mnMenuController', require('./menu-controller'))
  .directive('mnMenu', require('./menu-directive'));
