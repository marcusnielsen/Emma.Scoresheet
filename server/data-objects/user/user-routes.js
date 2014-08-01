'use strict';

module.exports = function (router, userRepository, passport) {
  router.route('/users')
    .post(function (req, res) {
      console.log('req.body: ' + req.body.name + req.body.password);
      userRepository.saveUser(req.body, function (err, data) {
        if (err) {
          console.error(err);
          return;
        }

        res.json(data);
      });
    });

  router.route('/login')
    .post(passport.authenticate('local', {
      failureRedirect: '/fail',
      failureFlash: true
    }), function (req, res) {
      res.json(req.user);
    });

  // TODO: Fix code when needed.
  /*.get(authenticate, function (req, res) {
   userRepository.getUsers(function (err, data) {
   if(err) {
   console.error(err);
   return;
   }

   res.json(data);
   });
   });*/

  router.route('logout')
    .get(function (req, res) {
      req.logout();
      res.send(200);
    });
};
