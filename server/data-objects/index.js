module.exports = function (router, isAuthenticated) {
    var userRepository = require('./user/user-repository')();
    require('./user/user-routes')(router, userRepository, isAuthenticated);
};