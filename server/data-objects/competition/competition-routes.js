'use strict';

var routeHelper = require('../helpers/route-helper');
var competitionRepository = require('./competition-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/competitions')
    .get(routeHelper.onGetAll(competitionRepository))
    .post(authenticate, routeHelper.onSave(competitionRepository));
};
