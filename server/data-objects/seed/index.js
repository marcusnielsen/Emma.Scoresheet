'use strict';

var async = require('async');
var dropCollections = require('./helpers/dropCollections');

var seeders = [];

seeders.push(require('./user'));
seeders.push(require('./vehicle'));
seeders.push(require('./setting'));
seeders.push(require('./competition'));

var asyncCallbacks = [dropCollections];

seeders.forEach(function (seeder) {
  asyncCallbacks.push(seeder.seed);
});

async.series(asyncCallbacks);
