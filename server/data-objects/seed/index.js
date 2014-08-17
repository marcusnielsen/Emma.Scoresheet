'use strict';

var mongoose = require('mongoose');
var async = require('async');

mongoose.connection.db.dropDatabase(function() {
  var seeders = [];

  seeders.push(require('./user'));
  seeders.push(require('./vehicle'));
  seeders.push(require('./setting'));

  var asyncCallbacks = [];

  seeders.forEach(function (seeder) {
    asyncCallbacks.push(seeder.seed);
  });

  async.series(asyncCallbacks);
});
