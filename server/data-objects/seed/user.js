'use strict';

var userRepository = require('../user/user-repository');
var config = require('./config');

var userSeed = {};

userSeed.delete = function (cb) {
  userRepository.deleteAll(cb);
};

userSeed.seed = function (cb) {
  var dataCollection = [];

  config.users.forEach(function (user) {

    var userInput = {name: user.email, password: user.password};

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
