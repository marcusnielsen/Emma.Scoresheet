'use strict';

module.exports = ['$scope', 'mnUserFactory', function ($scope, mnUserFactory) {
  $scope.user = mnUserFactory;
}];
