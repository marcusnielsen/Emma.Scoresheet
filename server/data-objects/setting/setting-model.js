'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingSchema = new mongoose.Schema({
  userId: {
    type: Schema.ObjectId, ref: 'UserSchema'
  },
  settingCollection: [{
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

var Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;
