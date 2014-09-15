'use strict';

var gravatar = require('gravatar');

module.exports = ['$rootScope', function ($rootScope) {
  var userFactory = {};

  userFactory.navigationItems = [
    {title: '$USER', sref: 'user'},
    {title: '$VEHICLES', sref: 'user.vehicle'},
    {title: '$SETTINGS', sref: 'user.setting'},
    {title: '$COMPETITIONS', sref: 'user.competition'}
  ];

  userFactory.userData = [];

  $rootScope.$on('login-logged-in', function (event, userData) {
    userFactory.userData = userData;

    $rootScope.$emit('user-loaded', userData );
  });

  userFactory.getUserImage = function (pixelSize) {
    return gravatar.url(userFactory.userData.email, {s: pixelSize});
  };

  return userFactory;
}];
