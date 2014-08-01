'use strict';

module.exports = function (router, passport) {
  var userRepository = require('./user/user-repository');
  require('./user/user-routes')(router, userRepository, passport);
};
