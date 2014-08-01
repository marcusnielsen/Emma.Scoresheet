'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$scope', '$translate', 'mnThemeFactory', 'mnSettingsFactory', 'mnScoresheetFactory',
  function ($rootScope, $scope, $translate, mnThemeFactory, mnSettingsFactory, mnScoresheetFactory) {
  $scope.app = {
    githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
  };

  $scope.theme = mnThemeFactory;
  $scope.translate = $translate;
  $scope.scoresheet = mnScoresheetFactory;

    $rootScope.$on('settings-changed', function () {
    var lclSetting = _.find(mnSettingsFactory.settingsCollection, function (setting) {
      return setting.name === 'lcl';
    });

    $translate.use(lclSetting.value);
  });

  $rootScope.$on('$translateChangeEnd', function () {
    //TODO: Remove.
    console.log('Inside $on $translateChangeStart');

    $rootScope.$broadcast('setting-updated', {name: 'lcl', value: $translate.use()});
  });

}];
