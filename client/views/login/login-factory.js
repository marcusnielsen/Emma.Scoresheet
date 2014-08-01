'use strict';

module.exports = ['$rootScope', '$http', function ($rootScope, $http) {
  var loginFactory = {};

  loginFactory.register = function () {
    console.dir(loginFactory.user);
    $http.post('api/users', loginFactory.user).then(function () {

    });
  };

  loginFactory.login = function () {
    $http.post('api/login', loginFactory.user).then(function (res) {
      loginFactory.user.id = res.data._id;
      // TODO: Remove.
      console.dir(res.data);
      //TODO: Cleanup isLoggedIn = data.
      loginFactory.isLoggedIn = res.data.name;

      $rootScope.$broadcast('login-logged-in');
    });
  };

  loginFactory.user = {
    id: '',
    name: '',
    password: ''
  };

  loginFactory.isLoggedIn = false;

  return loginFactory;
}];
