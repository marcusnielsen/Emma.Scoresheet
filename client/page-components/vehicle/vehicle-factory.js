'use strict';

module.exports = ['$rootScope', '$http', function ($rootScope, $http) {
  var vehicleFactory = {};

  vehicleFactory.vehicleData = {};

  $rootScope.$on('user-loaded', function (event, userData) {
    $http.get('api/vehicles/' + userData.id).then(function (res) {
      vehicleFactory.vehicleData = res.data;
    });
  });

  return vehicleFactory;
}];
