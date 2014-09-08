'use strict';

var _ = require('lodash');

module.exports = ['mnSecondaryMenuTreeValue', function (mnSecondaryMenuTreeValue) {

  var factory = {};
  factory.menuTree = mnSecondaryMenuTreeValue;

  factory.getCurrentMenuTree = function (parentSref) {
    var menuTree = _.find(mnSecondaryMenuTreeValue, { parentSref: parentSref });

    return menuTree;
  };

  return factory;
}];
