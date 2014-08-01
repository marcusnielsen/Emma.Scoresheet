'use strict';

var Settings = require('./settings-model');

var settingsRepository = {};

settingsRepository.save = function (settingsInput, cb) {
  var settings = new Settings({
    userId: settingsInput.userId,
    settingsCollection: settingsInput.settingsCollection
  });

  settings.save(function(err) {
    if(err) { return cb(err); }

    cb(null, { message: 'Saved settings for user ID: ' + settings.userId });
  });
};

settingsRepository.get = function (userIdInput, cb) {
  Settings.findOne({userId: userIdInput}, function (err, settings) {
    if(err) { return cb(err); }

    return cb(null, settings);
  });
};

settingsRepository.deleteAll = function (cb) {
  Settings.find({}).remove(function () {
    cb();
  });
};

module.exports = settingsRepository;