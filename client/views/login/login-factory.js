'use strict';

module.exports = ['$http', function ($http) {
  var loginFactory = {};

  loginFactory.register = function () {
    console.dir(loginFactory.user);
    $http.post('api/users', loginFactory.user).then(function () {

    });
  };

  loginFactory.login = function () {
    //TODO: Cleanup isLoggedIn = data.
    $http.post('api/login', loginFactory.user).then(function (res) {
      console.dir(res.data);
      loginFactory.isLoggedIn = res.data.name;
    });
  };

  loginFactory.user = {
    name: '',
    password: ''
  };

  loginFactory.isLoggedIn = false;

  return loginFactory;
}];
