'use strict';

var gravatar = require('gravatar');

module.exports = ['$rootScope', function ($rootScope) {
  var userFactory = {};

  userFactory.userData = {};

  $rootScope.$on('login-logged-in', function (event, userData) {
    userFactory.userData = userData;

    // TODO: Remove once the server sends the correct data.
    userFactory.userData.id = userFactory.userData._id;

    $rootScope.$emit('user-loaded', userFactory.userData);
  });

  userFactory.getUserImage = function (pixelSize) {
    return gravatar.url(userFactory.userData.email, {s: pixelSize});
  };

  return userFactory;
}];
