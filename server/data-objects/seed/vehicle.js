'use strict';

var vehicleRepository = require('../vehicle/vehicle-repository');
var userRepository = require('../user/user-repository');
var config = require('./config');

var vehicleSeed = {};

vehicleSeed.seed = function (cb) {
  var usersCount = 0;

  config.users.forEach(function (userConfig) {
    userRepository.getByEmail(userConfig.email, function (err, userModel) {
      if(err) { return console.error(err); }

      var vehicleInput = {
        vehicleCollection: userConfig.vehicleCollection,
        userId: userModel.id
      };

      vehicleRepository.save(vehicleInput, function (err, data) {
        if(err){ console.error(err); }

        usersCount++;

        if(usersCount === config.users.length) {
          cb();
        }
      });
    });
  });
};

module.exports = vehicleSeed;
