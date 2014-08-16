'use strict';

var seeders = [];

// TODO: Drop the database instead of repository deletes. Remove the deleteAll functions from repository for safety measures.

seeders.push(require('./user'));
seeders.push(require('./vehicle'));
seeders.push(require('./setting'));


var asyncCallbacks = [];

seeders.forEach(function (seeder) {
  asyncCallbacks.push(seeder.delete);
});

seeders.forEach(function (seeder) {
  asyncCallbacks.push(seeder.seed);
});

var async = require('async');

//TODO: Last function gets called twice! Fix bug!

async.waterfall(asyncCallbacks, function (err) {
  if (err) { return console.error(err); }
});
