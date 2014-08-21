'use strict';

module.exports = angular.module('mnScoreSheetTemplate', [])
  .factory('mnScoresheetTemplateFactory', require('./scoresheet-template-factory'))
  .controller('mnScoresheetTemplateController', require('./scoresheet-template-controller'));
