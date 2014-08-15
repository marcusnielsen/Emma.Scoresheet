'use strict';

module.exports = ['$rootScope', '$http', 'mnUserFactory', function ($rootScope, $http, mnUserFactory) {
  var loginFactory = {};

  loginFactory.register = function () {
    $http.post('api/users', loginFactory.loginData).then(function () {
      //TODO: Something?
    });
  };

  loginFactory.login = function () {
    $http.post('api/login', loginFactory.loginData).then(function (res) {
      mnUserFactory.userData = res.data;

      //TODO: Cleanup & refactor isLoggedIn
      loginFactory.isLoggedIn = true;

      $rootScope.$broadcast('login-logged-in');
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
