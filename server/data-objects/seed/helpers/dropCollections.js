'use strict';

var async = require('async');
var _ = require('lodash');
var mongoose = require('mongoose');

var dropCollections = function(cb) {
  var collections = _.keys(mongoose.connection.collections);

  async.forEach(collections, function(collectionName, done) {
    if(collectionName.indexOf('system.') === 0) {
      done(null);
    }
    else {
      var collection = mongoose.connection.collections[collectionName];
      collection.drop(function (err) {
        if (err && err.message !== 'ns not found') {
          done(err);
        }
        done(null);
      });
    }
  }, cb);
};

module.exports = dropCollections;
