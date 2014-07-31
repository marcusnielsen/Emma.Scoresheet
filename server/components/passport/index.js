'use strict';

var passport = require('passport');
require('./strategies/local');

//TODO: Use repository and not the model for findById.
var User = require('../../data-objects/user/user-model');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

     passport.serializeUser(function(user, done) {
        done(null, user.id);
     });

     passport.deserializeUser(function(id, done) {
         User.findById(id, function(err, user) {
            done(err, user);
         });
     });

    return passport;
};
