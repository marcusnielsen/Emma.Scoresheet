'use strict';

var async = require('async');

module.exports = function (userRepository) {
    var deleteUsers = function (callback) {
        userRepository.deleteUsers();
        callback(null);
    };
    
    var seedUsers = function (callback) {
        var users = [
            {name: 'User', password: 'user'},
            {name: 'Admin', password: 'admin'},
            {name: 'Super', password: 'super'}
        ];

        var dataCollection = [];

        users.forEach(function (user) {
            userRepository.postUser(user, function (err, data) {
                if(err) {
                    console.error(err);
                }

                dataCollection.push(data);

                if(dataCollection.length === users.length) {
                    callback(null, dataCollection);
                }
            });
        });
    };
    
    async.waterfall([
        deleteUsers,
        seedUsers],
        function (err, result) {
            if(err) {
                console.error(err);
            }

            console.log(result);
    });
};
