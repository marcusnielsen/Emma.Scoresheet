'use strict'

var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.mongo.uri, config.mongo.options);
    var userRepository = require('../../data-objects/user/user-repository')();
    // Populate DB with sample data
    if(config.seedDB) {
        require('./seed')(userRepository);
    }

    var exports = {};
    exports.userRepository = userRepository;
    return exports;
};