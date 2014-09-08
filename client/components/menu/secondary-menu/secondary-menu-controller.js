'use strict';

module.exports = ['$scope', '$state', 'mnSecondaryMenuFactory', function ($scope, $state, mnSecondaryMenuFactory) {
  $scope.secondaryMenu = mnSecondaryMenuFactory;
  $scope.state = $state;
}];
