'use strict';

var modelHelper = {};

modelHelper.onSave = function (modelItem, cb) {
  // TODO: Filter what is returned to the client somewhere in the pipeline.
  var saveCallback = function (err, item, numberAffected) {
    if (err) {
      cb(err);
    }
    cb(null, item);
  };

  return saveCallback;
};

modelHelper.onFind = function (cb) {
  var findCallback = function (err, result) {
    if (err) {
      cb(err);
      return;
    }

    cb(null, result);
  };

  return findCallback;
};

modelHelper.onRemove = function (cb) {
  var removeCallback = function () {
    cb();
  };

  return removeCallback;
};


module.exports = modelHelper;
