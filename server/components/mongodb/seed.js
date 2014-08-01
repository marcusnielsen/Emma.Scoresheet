'use strict';

var async = require('async');
var userRepository = require('../../data-objects/user/user-repository');
var settingsRepository = require('../../data-objects/settings/settings-repository');

module.exports = function () {
  var deleteUsers = function (cb) {
    userRepository.deleteUsers(cb);
  };

  var seedUsers = function (callback) {
    var users = [
      {name: 'useren', password: 'useren'},
      {name: 'userse', password: 'userse'}
    ];

    var dataCollection = [];

    users.forEach(function (user) {
      userRepository.saveUser(user, function (err, data) {
        if (err) {
          console.error(err);
        }

        dataCollection.push(data);

        if (dataCollection.length === users.length) {
          callback(null, users);
        }
      });
    });
  };

  var deleteSettings = function (cb) {
    settingsRepository.deleteAll(cb);
  };

  var settingsCollections = {
    useren: [
      {name: 'lcl', value: 'en_US'},
      {name: 'cssCdn', value: '//netdna.bootstrapcdn.com/bootswatch/latest/slate/bootstrap.min.css'}
  ],
    userse: [
      {name: 'lcl', value: 'sv_SE'},
      {name: 'cssCdn', value: '//netdna.bootstrapcdn.com/bootswatch/latest/cosmo/bootstrap.min.css'}
    ]
  };

  var seedSettings = function (users, cb) {
    users.forEach(function (user) {
        userRepository.getUserByName(user.name, function (err, user) {
          var settingsInput = { settingsCollection: settingsCollections[user.name]};
          settingsInput.userId = user.id;
          settingsRepository.save(settingsInput, function (err, data) {
            if(err){ console.error(err); }

            //TODO: console.log(data.message);

            cb();
          });
        });
    });
  };

  async.waterfall([
      deleteUsers,
      deleteSettings,
      seedUsers,
      seedSettings],
    function (err) {
      if (err) { return console.error(err); }
    });
};
