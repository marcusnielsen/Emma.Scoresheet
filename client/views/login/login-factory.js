'use strict';

module.exports = ['$http', function($http) {
    var loginFactory = {};

    loginFactory.register = function () {
        console.dir(loginFactory.user);
        $http.post('api/users', loginFactory.user).then(function () {

        });
    };

    loginFactory.login = function () {
        $http.post('api/login', loginFactory.user).then(function () {
            loginFactory.isLoggedIn = true;
        });
    };

    loginFactory.user = {
        name: '',
        password: ''
    };

    loginFactory.isLoggedIn = false;

    return loginFactory;
}];
