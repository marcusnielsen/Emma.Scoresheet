'use strict';

var modelHelper = require('../helpers/model-helper');
var Competition = require('./competition-model');

var competitionRepository = {};

competitionRepository.save = function (competitionInput, cb) {
  var competition = new Competition(competitionInput);
  competition.save(modelHelper.onSave(competition, cb));
};

competitionRepository.getById = function (competitionIdInput, cb) {
  Competition.findOne({id: competitionIdInput}, modelHelper.onFind(cb));
};

competitionRepository.getAll = function (cb) {
  Competition.find({}, modelHelper.onFind(cb));
};

module.exports = competitionRepository;
