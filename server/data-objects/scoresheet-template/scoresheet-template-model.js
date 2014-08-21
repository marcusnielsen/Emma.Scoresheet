'use strict';

var mongoose = require('mongoose');

var ScoresheetTemplateSchema = new mongoose.Schema({
  title: String,
    sections: [{
        title: String,
        inputs: [{
            title: String,
            inputType: String,
            selectOptions: [mongoose.Schema.Mixed]
          }]
      }]
});

var ScoresheetTemplate = mongoose.model('ScoresheetTemplate', ScoresheetTemplateSchema);

module.exports = ScoresheetTemplate;
