'use strict';

var seeders = [];

seeders.push(require('./user'));
seeders.push(require('./setting'));
seeders.push(require('./vehicle'));

var asyncCallbacks = [];

seeders.forEach(function (seeder) {
  asyncCallbacks.push(seeder.delete);
});

seeders.forEach(function (seeder) {
  asyncCallbacks.push(seeder.seed);
});

var async = require('async');

async.waterfall(asyncCallbacks, function (err) {
  if (err) { return console.error(err); }
});
