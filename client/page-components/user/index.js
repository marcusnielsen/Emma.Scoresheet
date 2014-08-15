'use strict';

module.exports = angular.module('mnUser', [])
  .factory('mnUserFactory', require('./user-factory'))
  .controller('mnUserController', require('./user-controller'));
