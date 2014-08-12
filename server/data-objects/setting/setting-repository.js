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
    setting.settingsCollection = settingInput.settingsCollection;

    setting.save(function(err) {
      if(err) { return cb(err); }

      cb(null, { message: 'Saved settings for user ID: ' + setting.userId });
    });
  });

};

settingRepository.get = function (userIdInput, cb) {
  Setting.findOne({userId: userIdInput}, function (err, setting) {
    if(err) { return cb(err); }

    return cb(null, setting);
  });
};

settingRepository.deleteAll = function (cb) {
  Setting.find({}).remove(function () {
    cb();
  });
};

module.exports = settingRepository;
