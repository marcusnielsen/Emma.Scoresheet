'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', 'mnMenuTreeValue', function ($rootScope, mnMenuTreeValue) {
  var setRightMenu = function (sref) {
    var loginOption = _.find(mnMenuTreeValue.primaryMenu.rightMenu.options, {sref: sref});
    mnMenuTreeValue.primaryMenu.rightMenu.currentOption = loginOption;
  };

  setRightMenu('login');

  var factory = {};

  factory.menuTree = mnMenuTreeValue;

  $rootScope.$on('login-logged-in', function () {
    setRightMenu('user');
  });

  $rootScope.$on('login-logged-out', function () {
    setRightMenu('login');
  });

  // For compressed menu when viewing with a small screen.
  factory.isExpanded = true;

  return factory;
}];
