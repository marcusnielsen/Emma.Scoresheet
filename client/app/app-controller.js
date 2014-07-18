'use strict';

module.exports = ['$scope', 'mnScoresheetFactory', 'mnThemeFactory', function ($scope, mnScoresheetFactory, mnThemeFactory) {
    $scope.app = {
        githubUrl: 'https://github.com/marcusnielsen/emma-scoresheet'
    };

    $scope.style = mnThemeFactory;
    $scope.scoresheet = mnScoresheetFactory;
}];