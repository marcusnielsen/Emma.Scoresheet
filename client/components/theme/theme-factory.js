'use strict';
// TODO: Find best practice for using lodash in multiple files.
var _ = require('lodash');

module.exports = ['$http', function ($http) {
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

  factory.setTheme = function (theme) {
    factory.selected = _.cloneDeep(theme);
  };

  factory.isThemeNameSelected = function (themeName) {
    return factory.selected.name === themeName;
  };

  return factory;
}];
