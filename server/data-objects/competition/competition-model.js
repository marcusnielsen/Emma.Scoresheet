'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionSchema = new mongoose.Schema({
  title : String,
  judges: [{
    type: Schema.ObjectId, ref: 'UserSchema'
  }],
  participants: [{
    type: Schema.ObjectId, ref: 'UserSchema'
  }],
  startDate: Date // TODO: Make sure Date shouldn't be some other type.
});

var Competition = mongoose.model('Competition', CompetitionSchema);

module.exports = Competition;
