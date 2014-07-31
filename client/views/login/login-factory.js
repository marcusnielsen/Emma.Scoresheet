'use strict';

module.exports = ['$http', function($http) {
    var loginFactory = {};

    loginFactory.register = function () {
        console.dir(loginFactory.user);
        $http.post('api/users', loginFactory.user).then(function () {
            loginFactory.isLoggedIn = true;
        });
    };

    loginFactory.login = function () {
        alert('LOGIN CALLED!');
    };

    loginFactory.user = {
        name: '',
        password: ''
    };

    loginFactory.isLoggedIn = false;

    return loginFactory;
}];
