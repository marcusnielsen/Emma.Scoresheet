'use strict';

var mongoose = require('mongoose');

module.exports = function (config, cb) {
  mongoose.connect(config.mongo.uri, config.mongo.options, cb);
};
