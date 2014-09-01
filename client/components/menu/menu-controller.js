'use strict';

module.exports = ['$scope', '$state', 'mnMenuFactory', 'mnUserFactory', function ($scope, $state, mnMenuFactory, mnUserFactory) {
  $scope.menu = mnMenuFactory;
  $scope.user = mnUserFactory;
  $scope.state = $state;
}];
