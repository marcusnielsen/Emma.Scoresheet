'use strict';

var routeHelper = require('../helpers/route-helper');
var vehicleRepository = require('./vehicle-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/vehicle:user_id')
    .get(authenticate, routeHelper(vehicleRepository))
    .post(authenticate, routeHelper(vehicleRepository));
};
