'use strict';

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

  $rootScope.$on('login-logged-in', function (event, args) {
    settings.loadSettings();
  });

  return settings;
}];


