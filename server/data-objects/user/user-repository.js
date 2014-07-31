'use strict';

var User = require('./user-model');

var userRepository = {};

userRepository.saveUser = function (userInput, cb) {
    var user = new User({
        name: userInput.name,
        password: userInput.password
    });

    user.save(function (err) {
        if(err) {
            cb(err);
        }
        console.log('saved userInput: ' + userInput);
        cb(null, { message: 'Added user: ' + userInput.name + '.'});
    });
};

userRepository.getUserByName = function (name, cb) {
  User.findOne({name: name}, function (err, user) {
      if(err) {
          cb(err);
          return;
      }

      cb(null, user);
  });
};

userRepository.getUsers = function (cb) {
    User.find(function (err, users) {
       if(err) {
           cb(err);
       }

       cb(null, users);
    });
};

userRepository.deleteUsers = function (cb) {
    User.find({}).remove(function () {
        console.log('Removed all users from db.');
        cb();
    });
};

module.exports = userRepository;
