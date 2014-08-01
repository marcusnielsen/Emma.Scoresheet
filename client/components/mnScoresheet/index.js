'use strict';

module.exports = angular.module('mnScoresheet', [])
  .factory('mnScoresheetFactory', require('./mnScoresheet-factory'))
  .directive('mnScoresheet', require('./mnScoresheet-directive'));
