'use strict';

var routeHelper = require('../helpers/route-helper');
var scoresheetTemplateRepository = require('./scoresheet-template-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/scoresheet-templates')
    .get(routeHelper.onGetAll(scoresheetTemplateRepository))
    .post(authenticate, routeHelper.onSave(scoresheetTemplateRepository));
};
