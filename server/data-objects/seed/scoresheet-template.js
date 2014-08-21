'use strict';

var scoresheetTemplateRepository = require('../scoresheet-template/scoresheet-template-repository');
var config = require('./config');

var scoresheetTemplateSeed = {};

scoresheetTemplateSeed.seed = function (cb) {
  var saveCount = 0;

  config.scoresheetTemplates.forEach(function (scoresheetTemplateConfig) {
    scoresheetTemplateRepository.save(scoresheetTemplateConfig, function (err) {
      saveCount++; // TODO: Check other seeds so they add to count before error-returning. Otherwise we might get a memory leak.

      if(err) { return console.error(err); }

      if(saveCount === config.scoresheetTemplates.length) {
        cb();
      }
    });
  });
};

module.exports = scoresheetTemplateSeed;
