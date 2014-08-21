'use strict';

module.exports = angular.module('mnScoreSheetTemplate', [])
  .factory('mnScoreSheetTemplateFactory', require('./scoresheet-template-factory'))
  .controller('mnScoresheetTemplateController', require('./scoresheet-template-controller'));
