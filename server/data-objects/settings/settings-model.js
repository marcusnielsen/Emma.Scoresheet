'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingsSchema = new mongoose.Schema({
  userId: {
    type: Schema.ObjectId, ref: 'UserSchema'
  },
  settingsCollection: [{
    name: {
    type: String
    //TODO: unique: true
    //TODO: required: true
    },
    value: {
      type: String
      //TODO: required: true
    }
  }]
});

var Settings = mongoose.model('Settings', SettingsSchema);

module.exports = Settings;
