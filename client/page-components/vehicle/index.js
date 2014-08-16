'use strict';

module.exports = angular.module('mnVehicle', [])
  .factory('mnvehicleFactory', require('./vehicle-factory'))
  .controller('mnvehicleController', require('./vehicle-controller'));
