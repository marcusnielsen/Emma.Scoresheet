'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$http', 'mnLoginFactory', function ($rootScope, $http, mnLoginFactory) {
  var settings = {};

  settings.settingsCollection = '';

  settings.loadSettings = function () {
    if(mnLoginFactory.user.id === '') { return console.error('user.id is not set.'); }

    return $http.get('api/settings/' + mnLoginFactory.user.id).then(function (res) {
      settings.settingsCollection = res.data.settingsCollection;
      $rootScope.$broadcast('settings-changed');
    });
  };

  settings.save = function () {
    if(mnLoginFactory.user.id === '') { return console.error('user.id is not set.'); }

    $http.post('api/settings/' + mnLoginFactory.user.id, settings.settingsCollection).then(function (res) {
      //TODO: Replace with proper messaging.
      console.log('Settings saved.');
    });
  };

  $rootScope.$on('login-logged-in', function (event, args) {
    settings.loadSettings();
  });

  $rootScope.$on('setting-updated', function (event, args) {
    //TODO: Refactor to a function call. Avoid this check if possible. $translate event broadcaster needs to change.
    if(mnLoginFactory.user.id === '') { return console.error('user.id is not set.'); }

    //TODO: Remove.
    console.log('Inside $on setting-updated.');

    var newSetting = args;

    var oldSetting = _.find(settings.settingsCollection, {'name': newSetting.name});

    oldSetting.value = newSetting.value;

    //TODO: Remove.
    console.dir(newSetting);

    //TODO: Remove.
    console.dir(oldSetting);

    //TODO: Remove.
    console.dir(settings.settingsCollection);
  });

  return settings;
}];


