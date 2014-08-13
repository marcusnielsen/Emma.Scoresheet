'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$http', 'mnSettingFactory', function ($rootScope, $http, mnSettingFactory) {
  var factory = {};

  factory.selected = {
    name: 'Flatly',
    cssCdn: '//netdna.bootstrapcdn.com/bootswatch/latest/flatly/bootstrap.min.css'
  };

  factory.themes = [];

  $http.get('//api.bootswatch.com/3/').success(function (data) {
    factory.themes = _.map(data.themes, function (theme) {
      return {name: theme.name, cssCdn: theme.cssCdn};
    });
  });

  factory.setThemeByName = function (themeName) {
    var theme = _.find(factory.themes, function (theme) {
      return theme.name.toLowerCase() === themeName.toLowerCase();
    });

    factory.selected = theme;

    $rootScope.$broadcast('setting-updated', {name: 'themeName', value: themeName});
  };

  factory.isThemeNameSelected = function (themeName) {
    return factory.selected.name === themeName;
  };

  $rootScope.$on('setting-changed', function (event, args) {
    var themeSetting = _.find(mnSettingFactory.settingCollection, function (setting) {
      return setting.name === 'themeName';
    });

    factory.setThemeByName(themeSetting.value);
  });

  return factory;
}];
