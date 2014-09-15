'use strict';

var _ = require('lodash');
var md5 = require('MD5');

module.exports = ['$rootScope', 'mnPrimaryMenuTreeValue', function ($rootScope, mnPrimaryMenuTreeValue) {
  var setRightMenu = function (sref) {
    var loginOption = _.find(mnPrimaryMenuTreeValue.rightMenu.options, {sref: sref});
    mnPrimaryMenuTreeValue.rightMenu.currentOption = loginOption;
  };

  setRightMenu('login');

  var factory = {};
  factory.primaryMenuTree = mnPrimaryMenuTreeValue;

  factory.userData = [];

  $rootScope.$on('user-loaded', function (event, userData) {
    setRightMenu('user');
    factory.userData = userData;
    factory.userData.imageUrl = '//www.gravatar.com/' + md5(userData.email) + '.json?d=mm&s=28';
  });

  $rootScope.$on('login-logged-out', function () {
    setRightMenu('login');
  });

  factory.isMenuExpanded = true;

  return factory;
}];
