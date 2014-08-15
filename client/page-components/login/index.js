'use strict';

module.exports = angular.module('mnLogin', [])
  .factory('mnLoginFactory', require('./login-factory'))
  .controller('mnLoginController', require('./login-controller'));
