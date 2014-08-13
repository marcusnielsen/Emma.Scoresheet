'use strict';

var _ = require('lodash');

module.exports = ['$rootScope', '$scope', '$translate', 'mnThemeFactory', 'mnSettingFactory', 'mnScoresheetFactory',
  function ($rootScope, $scope, $translate, mnThemeFactory, mnSettingFactory, mnScoresheetFactory) {
  $scope.app = {
    githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
  };

  $scope.theme = mnThemeFactory;
  $scope.translate = $translate;
  $scope.scoresheet = mnScoresheetFactory;

    $rootScope.$on('setting-changed', function () {
    var lclSetting = _.find(mnSettingFactory.settingCollection, function (setting) {
      return setting.name === 'lcl';
    });

    $translate.use(lclSetting.value);
  });


  //TODO: Avoid calling the first time since that is the initialization and not an update of the setting
  //TODO: Check if $translate.use() !== lclSetting.value?
  $rootScope.$on('$translateChangeEnd', function () {
    $rootScope.$broadcast('setting-updated', {name: 'lcl', value: $translate.use()});
  });

}];
