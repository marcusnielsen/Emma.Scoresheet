'use strict';

module.exports = ['$rootScope', '$http', 'mnUserFactory', function ($rootScope, $http, mnUserFactory) {
  var loginFactory = {};

  var onLoggedIn = function (userData) {
    loginFactory.clearLoginData();
    loginFactory.isLoggedIn = true;
    mnUserFactory.userData = userData;
    $rootScope.$broadcast('login-logged-in');
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
    $rootScope.$broadcast('login-logged-out');
  };

  loginFactory.clearLoginData = function () {
    loginFactory.loginData = {};
  };

  loginFactory.loginData = {
  };

  loginFactory.isLoggedIn = false;

  return loginFactory;
}];
