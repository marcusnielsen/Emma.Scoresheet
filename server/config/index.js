'use strict';

var path = require('path');
var _ = require('lodash');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../..'),

  // Server port
  port: process.env.PORT || 3000,
  // Server IP
  ip: process.env.IP || undefined,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Should we let the server inject lr script?
  connectLiveReload: true,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: process.env.SESSION_SECRET || 'some-session-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL: 'http://fullstack-demo.herokuapp.com/auth/twitter/callback'
  },

  google: {
    clientID: process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL: 'http://fullstack-demo.herokuapp.com/auth/google/callback'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
    require('./' + process.env.NODE_ENV + '.js') || {});
