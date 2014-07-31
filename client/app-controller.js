'use strict';

module.exports = ['$scope', '$translate', 'mnScoresheetFactory', 'mnThemeFactory', function ($scope, $translate, mnScoresheetFactory, mnThemeFactory) {
    $scope.app = {
        githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
    };

    $scope.theme = mnThemeFactory;
    $scope.translate = $translate;
    $scope.scoresheet = mnScoresheetFactory;
}];
