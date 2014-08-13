'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// TODO: Use the repository layer.
var User = require('../../../data-objects/user/user-model');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }

      // No user found with that name
      if (!user) {
        return done(null, false);
      }

      // Make sure the password is correct
      user.verifyPassword(password, function (err, isMatch) {
        if (err) {
          return done(err);
        }

        // Password did not match
        if (!isMatch) {
          return done(null, false);
        }

        // Success
        return done(null, user);
      });
    });
  }
));
