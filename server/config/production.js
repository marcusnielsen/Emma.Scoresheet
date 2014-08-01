'use strict';

module.exports = {
  // Server port
  port: process.env.PORT || 8080,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/emma-scoresheet-prod'
  }
};
