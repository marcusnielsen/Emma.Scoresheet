'use strict';

//TODO: Menu should be under page-components / gui-components.
module.exports = angular.module('mnMenu', [require('./primary-menu').name, require('./secondary-menu').name])
  .value('mnMenuStateValue', require('./menu-state-value'))
  .config(require('./menu-config'));
