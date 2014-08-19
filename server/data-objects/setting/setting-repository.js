'use strict';

var Setting = require('./setting-model');

var settingRepository = {};

settingRepository.createOrUpdate = function (settingInput, cb) {
  settingRepository.get(settingInput.userId, function (err, setting) {
    if(err) { return console.error(err); }

    if(!setting) {
      setting = new Setting();
    }

    setting.userId = settingInput.userId;
    setting.settingCollection = settingInput.settingCollection;

    setting.save(function(err) {
      if(err) { return cb(err); }

      cb(null, { userId: setting.userId });
    });
  });
};

settingRepository.get = function (userIdInput, cb) {
  Setting.findOne({userId: userIdInput}, function (err, setting) {
    if(err) { return cb(err); }

    return cb(null, setting);
  });
};

module.exports = settingRepository;
