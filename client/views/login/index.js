'use strict';

module.exports = angular.module('mn.login', [])
    .factory('mnLoginFactory', require('./login-factory'))
    .controller('mnLoginController', require('./login-controller'));
