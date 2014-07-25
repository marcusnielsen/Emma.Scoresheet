'use strict';

module.exports = ['$scope', 'mnScoresheetFactory', 'mnThemeFactory', function ($scope, mnScoresheetFactory, mnThemeFactory) {
    $scope.app = {
        githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
    };

    $scope.theme = mnThemeFactory;
    $scope.scoresheet = mnScoresheetFactory;
}];