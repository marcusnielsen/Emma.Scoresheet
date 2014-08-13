'use strict';

var settingRepository = require('../setting/setting-repository');
var userRepository = require('../user/user-repository');
var config = require('./config');

var settingSeed = {};

settingSeed.delete = function (cb) {
  settingRepository.deleteAll(cb);
};

settingSeed.seed = function (cb) {
  config.users.forEach(function (userConfig) {
    userRepository.getByName(userConfig.name, function (err, userModel) {
      if(err) { return console.error(err); }

      var settingsInput = {
        settingCollection: userConfig.settingCollection,
        userId: userModel.id
      };

      settingRepository.createOrUpdate(settingsInput, function (err, data) {
        if(err){ console.error(err); }

        cb();
      });
    });
  });
};

module.exports = settingSeed;
