'use strict';

var userRepository = require('./user-repository');
var passport = require('passport');

module.exports = function (router) {
  //TODO: Change other routes to plural form.
  router.route('/users')
    .post(function (req, res) {
      userRepository.save(req.body, function (err, data) {
        if(err) { return console.error(err); }

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

            return res.json(req.user.privateClientData);
          });
        }
      )(req,res,next);
    });

  router.route('logout')
    .post(function (req, res) {
      req.logout();
      res.send(200);
    });
};
