'use strict';

module.exports = function (app) {

    var passport = require('passport');
    app.use(passport.initialize());
    var BasicStrategy = require('passport-http').BasicStrategy;
    // TODO: Use the repository layer.
    var User = require('../../data-objects/user/user-model')();

    passport.use(new BasicStrategy(
        function(name, password, done) {
            User.findOne({ name: name }, function (err, user) {
                if (err) { return done(err); }
                console.log(err);
                console.log(user);
                // No user found with that name
                if (!user) { return done(null, false); }

                // Make sure the password is correct
                user.verifyPassword(password, function(err, isMatch) {
                    if (err) { return done(err); }

                    // Password did not match
                    if (!isMatch) { return done(null, false); }

                    // Success
                    return done(null, user);
                });
            });
        }
    ));

    var exports = {};
    exports.isAuthenticated = passport.authenticate('basic', { session : false });
    return exports;
};