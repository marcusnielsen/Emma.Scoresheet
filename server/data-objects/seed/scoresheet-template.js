'use strict';

var competitionRepository = require('../competition/competition-repository');
var userRepository = require('../user/user-repository');
var config = require('./config');
var async = require('async');

var loadUserIds = function (competitionConfig, userCollectionString) {
  return function (cb) {
    competitionConfig[userCollectionString].forEach(function (userEmail) {
      var userIds = [];

      userRepository.getByEmail(userEmail, function (err, user) {
        if (err) { console.error(err); }

        userIds.push(user.id);

        if (userIds.length === competitionConfig[userCollectionString].length) {
          competitionConfig[userCollectionString] = userIds;
          cb();
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
    async.parallel([loadUserIds(competitionConfig, 'participants'), loadUserIds(competitionConfig, 'judges')], function (err) {
      if (err) {
        console.error(err);
      }

      saveCompetition(competitionConfig, cb);
    });
  });
};

module.exports = competitionSeed;
