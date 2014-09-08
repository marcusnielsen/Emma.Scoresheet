'use strict';

module.exports = ['$scope', '$state', 'mnPrimaryMenuFactory', function ($scope, $state, mnPrimaryMenuFactory) {
  $scope.primaryMenu = mnPrimaryMenuFactory;
  $scope.state = $state;
}];
