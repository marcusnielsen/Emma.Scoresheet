'use strict';

var modelHelper = require('../helpers/model-helper');
var User = require('./user-model');

var userRepository = {};

userRepository.save = function (userInput, cb) {
  var user = new User(userInput);
  user.save(modelHelper.onSave(userInput, cb));
};

userRepository.getByName = function (name, cb) {
  User.findOne({name: name}, modelHelper.onFind(cb));
};

userRepository.deleteAll = function (cb) {
  User.find({}).remove(modelHelper.onRemove(cb));
};

module.exports = userRepository;
