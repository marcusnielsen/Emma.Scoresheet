'use strict';

var settingsRepository = require('./settings-repository');

module.exports = function (router) {
  router.route('/settings:user_id')
    .get(function (req, res) {
      settingsRepository.get(req.user.id, function (err, settings) {
        if(err){ return console.error(err); }

        res.json(settings);
      });
    })
    .post(function (req, res) {
      var settingsInput = req.body;
      settingsInput.userId = req.user.id;

      settingsRepository.save(settingsInput, function (err, data) {
        if (err) { return console.error(err); }

        res.json(data);
      });
    });
};
