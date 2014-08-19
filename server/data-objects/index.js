'use strict';

var config = require('../config');

module.exports = function (router) {
  // Populate DB with sample data
  if (config.seedDB) {
    require('./seed');
  }

  require('./user/user-routes')(router);
  require('./setting/setting-routes')(router);
  require('./vehicle/vehicle-routes')(router);
  require('./competition/competition-routes')(router);
};
