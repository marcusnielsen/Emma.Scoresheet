'use strict';

module.exports = angular.module('mn.menu', [])
    .factory('mnMenuFactory', require('./menu-factory'))
    .controller('mnMenuController', require('./menu-controller'))
    .directive('mnMenu', require('./menu-directive'));