'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionSchema = new mongoose.Schema({
  title : String,
  startDate: Date,
  categories: [
    {
      title: String,
      judges: [{ type: Schema.ObjectId, ref: 'UserSchema' }],
      participants: [{
          userId: { type: Schema.ObjectId, ref: 'UserSchema' },
          vehicleId: { type: Schema.ObjectId, ref: 'UserSchema' }
        }]
    }]
});

var Competition = mongoose.model('Competition', CompetitionSchema);

module.exports = Competition;
