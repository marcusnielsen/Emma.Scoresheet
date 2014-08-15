'use strict';

module.exports = angular.module('mnLogin', [require('../user').name])
  .factory('mnLoginFactory', require('./login-factory'))
  .controller('mnLoginController', require('./login-controller'));
