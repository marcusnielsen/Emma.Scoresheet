'use strict';

var modelHelper = require('../helpers/model-helper');
var User = require('./user-model');

var userRepository = {};

//TODO: Go through the entire register procedure. Lots of client side logical bugs as well.
userRepository.save = function (userInput, cb) {
  var user = new User(userInput);
  user.save(modelHelper.onSave(userInput, cb));
};

userRepository.getByEmail = function (email, cb) {
  User.findOne({email: email}, modelHelper.onFind(cb));
};

module.exports = userRepository;
