'use strict';

module.exports = function (router) {
  require('./user/user-routes')(router);
  require('./settings/settings-routes')(router);
};
