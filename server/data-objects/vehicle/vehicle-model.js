'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new mongoose.Schema({
  userId: {
    type: Schema.ObjectId, ref: 'UserSchema'
  },
  vehicleCollection: [{
    licensePlates: [{
      type: String
    }],
    brand: {
      type: String
    },
    model: {
      type: String
    }
  }]
});

var Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
