'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new mongoose.Schema({
  userId: {
    type: Schema.ObjectId, ref: 'UserSchema'
  },
  vehiclesCollection: [{
    licensePlates: [{
      type: String
      //TODO: unique: true,
      //TODO: required: true
    }],
    brand: {
      type: String
      //TODO: required: true
    },
    model: {
      type: String
      //TODO: required: true
    }
  }]
});

var Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
