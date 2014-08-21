'use strict';

var competitionRepository = require('../competition/competition-repository');
var userRepository = require('../user/user-repository');
var vehicleRepository = require('../vehicle/vehicle-repository');
var config = require('./config');
var async = require('async');

var convertConfigData = function (idDataCollection, idData, competitionConfig, userCollectionString, cb) {
  idDataCollection.push(idData);

  if (idDataCollection.length === competitionConfig[userCollectionString].length) {
    competitionConfig[userCollectionString] = idDataCollection;
    cb();
  }
};

//TODO: Refactor names to what the really are! Before I forget and things get really confusing ;-)
var loadUserIds = function (competitionConfig, userCollectionString) {
  return function (cb) {
    competitionConfig[userCollectionString].forEach(function (memberConfig) {
      var ids = [];

      var email = userCollectionString === 'judges' ? memberConfig : memberConfig.email;

      userRepository.getByEmail(email, function (err, user) {
        if (err) { console.error(err); }

        if(userCollectionString === 'participants') {
          vehicleRepository.getByUserIdAndLicensePlate(user.id, memberConfig.licencePlate, function (err, vehicle) {
            if(err) { console.error(err); }

            convertConfigData(ids, {userId: user.id, vehicleId: vehicle.id}, competitionConfig, userCollectionString, cb);
          });
        }
        else if(userCollectionString === 'judges') {
          convertConfigData(ids, user.id, competitionConfig, userCollectionString, cb);
        }
        else {
          console.error('userCollectionString should a propery value. Give value is: ' + userCollectionString + '.');
        }
      });
    });
  };
};

var competitionsCount = 0;

var saveCompetition = function (competitionInput, cb) {
  competitionRepository.save(competitionInput, function (err, data) {
    if (err) { console.error(err); }

    competitionsCount++;

    if (competitionsCount === config.competitions.length) {
      cb();
    }
  });
};

var competitionSeed = {};

competitionSeed.seed = function (cb) {
  config.competitions.forEach(function (competitionConfig) {
    //TODO: Make it work with configurable categories too.
    async.parallel([loadUserIds(competitionConfig.categories[0], 'participants'), loadUserIds(competitionConfig.categories[0], 'judges')], function (err) {
      if (err) {
        console.error(err);
      }

      saveCompetition(competitionConfig, cb);
    });
  });
};

module.exports = competitionSeed;
