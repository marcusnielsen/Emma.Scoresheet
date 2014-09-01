'use strict';

module.exports = ['$scope', 'mnUserFactory', function ($scope, mnUserFactory, $state) {
  $scope.user = mnUserFactory;
  $scope.state = $state;
}];
