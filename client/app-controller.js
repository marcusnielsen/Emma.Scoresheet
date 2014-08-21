'use strict';

var _ = require('lodash');

//TODO: Refactor! Too much functionality in the controller.

module.exports = ['$rootScope', '$scope', '$translate', 'mnThemeFactory', 'mnSettingFactory',
  function ($rootScope, $scope, $translate, mnThemeFactory, mnSettingFactory) {
  $scope.app = {
    githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
  };

  $scope.theme = mnThemeFactory;
  $scope.translate = $translate;

    $rootScope.$on('setting-changed', function () {
    var lclSetting = _.find(mnSettingFactory.settingCollection, function (setting) {
      return setting.name === 'lcl';
    });

    $translate.use(lclSetting.value);
  });

  //TODO: Avoid calling the first time since that is the initialization and not an update of the setting
  //TODO: Check if $translate.use() !== lclSetting.value?
  $rootScope.$on('$translateChangeEnd', function () {
    $rootScope.$emit('setting-updated', {name: 'lcl', value: $translate.use()});
  });

}];
