'use strict';

var _ = require('lodash');

module.exports = ['$scope', '$translate', 'mnThemeFactory', 'mnSettingsFactory', 'mnScoresheetFactory', function ($scope, $translate, mnThemeFactory, mnSettingsFactory, mnScoresheetFactory) {
  $scope.app = {
    githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
  };

  $scope.theme = mnThemeFactory;
  $scope.translate = $translate;
  $scope.scoresheet = mnScoresheetFactory;

  $scope.$on('settings-changed', function () {
    var lclSetting = _.find(mnSettingsFactory.settingsCollection, function (setting) {
      return setting.name === 'lcl';
    });

    $translate.use(lclSetting.value);
  });
}];
