'use strict';

var settingRepository = require('../setting/setting-repository');
var userRepository = require('../user/user-repository');
var config = require('./config');

var settingSeed = {};

settingSeed.seed = function (cb) {
  var usersCount = 0;

  config.users.forEach(function (userConfig) {
    userRepository.getByEmail(userConfig.email, function (err, userModel) {
      if(err) { return console.error(err); }

      var settingsInput = {
        settingCollection: userConfig.settingCollection,
        userId: userModel.id
      };

      settingRepository.createOrUpdate(settingsInput, function (err, data) {
        if(err){ console.error(err); }

        usersCount++;

        if(usersCount === config.users.length) {
          cb();
        }
      });
    });
  });
};

module.exports = settingSeed;
