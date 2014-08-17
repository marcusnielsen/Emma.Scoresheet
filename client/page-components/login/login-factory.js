'use strict';

module.exports = ['$rootScope', '$http', function ($rootScope, $http) {
  var loginFactory = {};

  var onLoggedIn = function (userData) {
    loginFactory.clearLoginData();
    loginFactory.isLoggedIn = true;
    $rootScope.$emit('login-logged-in', userData);
  };

  loginFactory.register = function () {
    $http.post('api/users', loginFactory.loginData).then(function (res) {
      onLoggedIn(res.data);
    });
  };

  loginFactory.login = function () {
    $http.post('api/login', loginFactory.loginData).then(function (res) {
      onLoggedIn(res.data);
    });
  };

  loginFactory.logout = function () {
    loginFactory.isLoggedIn = false;
    $rootScope.$emit('login-logged-out');
  };

  loginFactory.clearLoginData = function () {
    loginFactory.loginData = {};
  };

  loginFactory.loginData = {
  };

  loginFactory.isLoggedIn = false;

  return loginFactory;
}];
