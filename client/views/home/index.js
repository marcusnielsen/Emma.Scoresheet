'use strict';

module.exports = angular.module('mnHome', [])
  .factory('mnHomeFactory', require('./home-factory'))
  .controller('mnHomeController', require('./home-controller'));
