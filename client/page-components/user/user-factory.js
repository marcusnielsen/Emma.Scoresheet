'use strict';

module.exports = ['$rootScope', function ($rootScope) {
  var userFactory = {};

  userFactory.userData = {};

  $rootScope.$on('login-logged-in', function (event, userData) {
    userFactory.userData = userData;

    // TODO: Remove once the server sends the correct data.
    userFactory.userData.id = userFactory.userData._id;

    $rootScope.$emit('user-loaded', userFactory.userData);
  });

  return userFactory;
}];
