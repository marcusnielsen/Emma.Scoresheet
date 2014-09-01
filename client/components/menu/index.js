'use strict';

//TODO: Menu should be under page-components / gui-components.
module.exports = angular.module('mnMenu', [require('../../page-components/user').name])
  .value('mnMenuStateValue', require('./menu-state-value'))
  .value('mnMenuTreeValue', require('./menu-tree-value'))
  .config(require('./menu-config'))
  .factory('mnMenuFactory', require('./menu-factory'))
  .controller('mnMenuController', require('./menu-controller'))
  .directive('mnMenu', require('./menu-directive'));
