'use strict';

var User = require('./user-model')();

module.exports = function () {
    var exports = {};

    exports.postUser = function (userInput, cb) {
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

    exports.getUsers = function (cb) {
        User.find(function (err, users) {
           if(err) {
               cb(err);
           }

           cb(null, users);
        });
    };

    exports.deleteUsers = function () {
        User.find({}).remove(function () {
            console.log('Removed all users from db.');
        });
    };

    return exports;
};