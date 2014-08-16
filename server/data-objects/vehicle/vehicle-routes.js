'use strict';

var routeHelper = require('../helpers/route-helper');
var vehicleRepository = require('./vehicle-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/vehicles/:user_id')
    .get(authenticate, routeHelper.onGetByUserId(vehicleRepository))
    .post(authenticate, routeHelper.onSave(vehicleRepository));
};
