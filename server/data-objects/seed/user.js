'use strict';

var userRepository = require('../user/user-repository');
var config = require('./config');
var _ = require('lodash');

var userSeed = {};

userSeed.seed = function (cb) {
  var usersCount = 0;

  config.users.forEach(function (user) {

    var userInput = _.pick(user, ['name', 'email', 'password', 'role']);

    userRepository.save(userInput, function (err, data) {
      if(err) { return console.error(err); }

      usersCount++;

      if(usersCount === config.users.length) {
        cb();
      }
    });
  });
};

module.exports = userSeed;
