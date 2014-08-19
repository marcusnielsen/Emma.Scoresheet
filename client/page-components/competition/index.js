'use strict';

module.exports = angular.module('mnCompetition', [])
  .factory('mnCompetitionFactory', require('./competition-factory'))
  .controller('mnCompetitionController', require('./competition-controller'));
