'use strict';

var userRepository = require('./user-repository');
var passport = require('passport');

module.exports = function (router) {
  router.route('/users')
    .post(function (req, res) {
      userRepository.save(req.body, function (err, data) {
        if (err) {
          console.error(err);
          return;
        }

        res.json(data);
      });
    });

  router.route('/login')
    .post(function (req, res, next) {
      passport.authenticate('local',
        function (err, user, info) {
          if (err) { return next(err); }

          if (!user) { return res.status(401).end(); }

          req.logIn(user, function(err) {
            if (err) { return next(err); }

            //TODO: Send back a 200 status when done with testing stuff.
            return res.json(req.user);
          });
        }
      )(req,res,next);
    });

  router.route('logout')
    .get(function (req, res) {
      req.logout();
      res.send(200);
    });
};
