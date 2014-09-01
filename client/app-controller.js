'use strict';

//TODO: Refactor! Too much functionality in the controller.
//TODO: themeFactory should not be app global.
//TODO: Should $translate be app global? Then put it under $scope.app.translate. Better to avoid app global.
//TODO: Wrap $translate and translate controller code with a mnTranslateFactory dependency.

module.exports = ['$rootScope', '$scope', '$translate', 'mnThemeFactory', 'mnSettingFactory',
  function ($rootScope, $scope, $translate, mnThemeFactory) {
    $scope.app = {
      githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
    };

    $scope.theme = mnThemeFactory;
    $scope.translate = $translate;

    $rootScope.$on('setting-changed-lcl', function (event, settingValue) {

    $translate.use(settingValue);
  });

  $rootScope.$on('$translateChangeEnd', function () {
    $rootScope.$emit('setting-updated', {name: 'lcl', value: $translate.use()});
  });

}];
