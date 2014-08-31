'use strict';

module.exports = ['$scope', 'mnMenuFactory', 'mnUserFactory', function ($scope, mnMenuFactory, mnUserFactory) {
  $scope.menu = mnMenuFactory;
  $scope.user = mnUserFactory;
}];
