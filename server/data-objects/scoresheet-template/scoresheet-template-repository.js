'use strict';

var modelHelper = require('../helpers/model-helper');
var ScoresheetTemplate = require('./scoresheet-template-model');

var scoresheetTemplateRepository = {};

scoresheetTemplateRepository.save = function (scoresheetTemplateInput, cb) {
  var scoresheetTemplate = new ScoresheetTemplate(scoresheetTemplateInput);
  scoresheetTemplate.save(modelHelper.onSave(scoresheetTemplateInput, cb));
};

scoresheetTemplateRepository.getById = function (scoresheetTemplateId, cb) {
  ScoresheetTemplate.findOne({id: scoresheetTemplateId}, modelHelper.onFind(cb));
};

scoresheetTemplateRepository.getAll = function (cb) {
  ScoresheetTemplate.find({}, modelHelper.onFind(cb));
};

module.exports = scoresheetTemplateRepository;
