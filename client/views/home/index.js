'use strict';

module.exports = angular.module('mn.home', [])
    .factory('mnHomeFactory', require('./home-factory'))
    .controller('mnHomeController', require('./home-controller'));
