'use strict';

var mongoose = require('mongoose');

var ScoresheetTemplateSchema = new mongoose.Schema({
  title: String,
  scoresheetTemplateData: {
    sections: [{
        title: String,
        inputs: [{
            title: String,
            type: String,
            options: [String]
          }]
      }]
  }
});

var ScoresheetTemplate = mongoose.model('ScoresheetTemplate', ScoresheetTemplateSchema);

module.exports = ScoresheetTemplate;
