'use strict';

module.exports = ['$rootScope', '$http', function ($rootScope, $http) {
  var competitionFactory = {};

  competitionFactory.competitionData = {};

  $http.get('api/competitions').then(function (res) {
    competitionFactory.competitionData = res.data;
  });

  return competitionFactory;
}];
