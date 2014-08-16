'use strict';

var routeHelper = {};

routeHelper.onGetByUserId = function (repository) {

  var getCallback = function (req, res) {
    repository.getAllByUserId(req.user.id, function (err, data) {
      if(err){ return console.error(err); }

      res.json(data);
    });
  };

  return getCallback;
};

routeHelper.onSave = function (repository) {
  var saveCallback = function (req, res) {
    repository.save(req.body, function (err, data) {
      if (err) { return console.error(err); }

      res.json(data);
    });
  };

  return saveCallback;
};

module.exports = routeHelper;
