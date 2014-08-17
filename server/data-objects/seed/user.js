'use strict';

var userRepository = require('../user/user-repository');
var config = require('./config');
var _ = require('lodash');

var userSeed = {};

userSeed.seed = function (cb) {
  var dataCollection = [];

  config.users.forEach(function (user) {

    var userInput = _.pick(user, ['name', 'email', 'password', 'role']);

    userRepository.save(userInput, function (err, data) {
      if (err) { return console.error(err); }

      dataCollection.push(data);

      if (dataCollection.length === config.users.length) {
        cb();
      }
    });
  });
};

module.exports = userSeed;
