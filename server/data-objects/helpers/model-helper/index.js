'use strict';

var modelHelper = {};

modelHelper.onSave = function (modelItem, cb) {
  var saveCallback = function (err) {
    if (err) {
      cb(err);
    }
    cb(null, { id: modelItem.id });
  };

  return saveCallback;
};

modelHelper.onFind = function (cb) {
  var findOneCallback = function (err, result) {
    if (err) {
      cb(err);
      return;
    }

    cb(null, result);
  };

  return findOneCallback;
};

modelHelper.onRemove = function (cb) {
  var removeCallback = function () {
    cb();
  };

  return removeCallback;
};


module.exports = modelHelper;
