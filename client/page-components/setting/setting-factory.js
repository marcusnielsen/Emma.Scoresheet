'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$http', 'mnUserFactory', function ($rootScope, $http, mnUserFactory) {
  var setting = {};

  setting.settingCollection = [];

  setting.loadSettings = function () {
    if(!mnUserFactory.userData.id) { return console.error('user.id is not set.'); }

    return $http.get('api/setting/' + mnUserFactory.userData.id).then(function (res) {

      if(_.isEmpty(res.data)) { return; }

      setting.settingCollection = res.data.settingCollection;
      $rootScope.$emit('setting-changed');
    });
  };

  setting.save = function () {
    if(!mnUserFactory.userData.id) { return console.error('user.id is not set.'); }

    $http.post('api/setting/' + mnUserFactory.userData.id, setting.settingCollection).then(function (res) {
      //TODO: Replace with proper handling.
      console.log('Setting saved.');
    });
  };

  $rootScope.$on('user-loaded', function () {
    setting.loadSettings();
  });

  $rootScope.$on('setting-updated', function (event, args) {
    if(!mnUserFactory.userData.id) { return; }

    var newSetting = args;

    var currentSetting = _.find(setting.settingCollection, {'name': newSetting.name});

    if(!currentSetting) {
      setting.settingCollection.push(newSetting);
    }
    else {
      currentSetting.value = newSetting.value;
    }
  });

  return setting;
}];


