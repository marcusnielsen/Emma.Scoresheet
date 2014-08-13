'use strict';

var settingRepository = require('./setting-repository');
var authenticate = require('../../components/passport/authenticate');

module.exports = function (router) {
  router.route('/setting/:user_id')
    .get(authenticate, function (req, res) {
      settingRepository.get(req.user.id, function (err, setting) {
        if(err){ return console.error(err); }

        res.json(setting);
      });
    })
    .post(authenticate, function (req, res) {
      var settingInput = {};

      settingInput.userId = req.user.id;
      settingInput.settingCollection = req.body;

      settingRepository.createOrUpdate(settingInput, function (err, data) {
        if (err) { return console.error(err); }

        res.json(data);
      });
    });
};
