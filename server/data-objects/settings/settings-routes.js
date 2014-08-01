'use strict';

var settingsRepository = require('./settings-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/settings/:user_id')
    .get(authenticate, function (req, res) {
      //TODO: Remove.
      console.log('inside settings get route.');
      settingsRepository.get(req.user.id, function (err, settings) {
        if(err){ return console.error(err); }

        res.json(settings);
      });
    })
    .post(authenticate, function (req, res) {
      var settingsInput = {};

      settingsInput.userId = req.user.id;
      settingsInput.settingsCollection = req.body;

      //TODO: Remove.
      console.dir(settingsInput);

      settingsRepository.createOrUpdate(settingsInput, function (err, data) {
        if (err) { return console.error(err); }

        res.json(data);
      });
    });
};
