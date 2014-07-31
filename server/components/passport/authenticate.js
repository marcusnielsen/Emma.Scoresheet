'use strict';

// route middleware to make sure a user is logged in
var isLoggedIn = function (req, res, next) {

    // if user is authenticated in the session, carry on
    if (!req.isAuthenticated()) {
        return next();
    }

    res.send(401);
};

module.exports = isLoggedIn;
