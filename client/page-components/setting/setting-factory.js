'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$http', 'mnLoginFactory', function ($rootScope, $http, mnLoginFactory) {
  var setting = {};

  setting.settingCollection = '';

  setting.loadSettings = function () {
    if(mnLoginFactory.user.id === '') { return console.error('user.id is not set.'); }

    return $http.get('api/setting/' + mnLoginFactory.user.id).then(function (res) {
      setting.settingCollection = res.data.settingCollection;
      $rootScope.$broadcast('setting-changed');
    });
  };

  setting.save = function () {
    if(mnLoginFactory.user.id === '') { return console.error('user.id is not set.'); }

    $http.post('api/setting/' + mnLoginFactory.user.id, setting.settingCollection).then(function (res) {
      //TODO: Replace with proper handling.
      console.log('Setting saved.');
    });
  };

  $rootScope.$on('login-logged-in', function (event, args) {
    setting.loadSettings();
  });

  $rootScope.$on('setting-updated', function (event, args) {
    //TODO: Refactor to a function call. Avoid this check if possible. $translate event broadcaster needs to change.
    if(!mnLoginFactory.isLoggedIn) { return; }

    var newSetting = args;

    var oldSetting = _.find(setting.settingCollection, {'name': newSetting.name});

    oldSetting.value = newSetting.value;
  });

  return setting;
}];


