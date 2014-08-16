'use strict';

var modelHelper = require('../helpers/model-helper');
var Vehicle = require('./vehicle-model');

var vehicleRepository = {};

vehicleRepository.save = function (vehicleInput, cb) {

  //TODO: VehicleInput should be added to an existing vehicleCollection if userId already exists.
  //TODO: userId must be unique.

  var vehicle = new Vehicle(vehicleInput);
  vehicle.save(modelHelper.onSave(vehicle, cb));
};

vehicleRepository.getAllByUserId = function (userIdInput, cb) {
  Vehicle.find({userId: userIdInput}, modelHelper.onFind(cb));
};

vehicleRepository.getByUserIdAndLicensePlate = function(userIdInput, licensePlateInput, cb) {
  Vehicle.findOne({userId: userIdInput, licensePlates: licensePlateInput}, modelHelper.onFind(cb));
};

vehicleRepository.deleteAll = function (cb) {
  Vehicle.find({}).remove(modelHelper.onRemove(cb));
};

module.exports = vehicleRepository;
