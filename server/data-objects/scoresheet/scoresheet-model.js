'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoresheetSchema = new mongoose.Schema({
  participantId: {type: Schema.ObjectId, ref: 'UserSchema'},
  vehicleId: {type: Schema.ObjectId, ref: 'VehicleSchema'},
  judgeId: {type: Schema.ObjectId, ref: 'UserSchema'},
  signatures: [{type: Schema.ObjectId, ref: 'UserSchema'}],
  templateId: {type: Schema.ObjectId, ref: 'ScoresheetTemplateSchema'},
  scoreData: {
    sections: [{
      sectionId: {type: Schema.ObjectId, ref: 'ScoresheetTemplateSchema'},
      title: String,
      inputs: [{
        inputId: {type: Schema.ObjectId, ref: 'ScoresheetTemplateSchema'},
        title: String,
        value: String
      }]
    }]
  }
});

var Scoresheet = mongoose.model('Scoresheet', ScoresheetSchema);

module.exports = Scoresheet;
