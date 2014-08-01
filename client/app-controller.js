'use strict';

module.exports = ['$scope', '$translate', 'mnScoresheetFactory', 'mnSettingsFactory', function ($scope, $translate, mnScoresheetFactory, mnSettingsFactory) {
  $scope.app = {
    githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
  };

  $scope.translate = $translate;
  $scope.scoresheet = mnScoresheetFactory;
  $scope.settings = mnSettingsFactory;
}];
