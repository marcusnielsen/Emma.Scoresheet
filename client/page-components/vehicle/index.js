'use strict';

module.exports = angular.module('mnVehicle', [])
  .factory('mnVehicleFactory', require('./vehicle-factory'))
  .controller('mnVehicleController', require('./vehicle-controller'));
