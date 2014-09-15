'use strict';

var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var md5 = require('MD5');

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: { type: String, lowercase: true },
  role: { type: String, default: 'user' },
  provider: String,
  facebook: {},
  twitter: {},
  google: {}
});

UserSchema.pre('save', function (callback) {
  var user = this;

  if (!user.isModified('password')) {
    return callback();
  }

  bcrypt.genSalt(5, function (err, salt) {
    if (err) {
      return callback(err);
    }

    bcrypt.hash(user.password, salt, null,
      function (err, hash) {
        if (err) {
          return callback(err);
        }

        user.password = hash;
        callback();
      });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

UserSchema.virtual('publicClientData')
  .get(function () {
    return {
      name: this.name,
      role: this.role,
      emailHash: md5(this.email)
    };
  });

UserSchema.virtual('privateClientData')
  .get(function () {
    return {
      name: this.name,
      role: this.role,
      email: this.email
    };
  });

var User = mongoose.model('User', UserSchema);

module.exports = User;
