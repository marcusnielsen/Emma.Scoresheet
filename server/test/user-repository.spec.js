'use strict';
var config = require('./../config');

var sinon = require('sinon');
var expect = require('chai').expect;

var mongoose = require('mongoose');
mongoose.connect(config.mongo.uri, config.mongo.options);

var userRepository = require('./../data-objects/user/user-repository')();
var testUserInput = {name: 'Test User', password: 'testpassword97531'};
var testUser;

beforeEach(function(done){
    userRepository.postUser(testUserInput, function (err, data) {
        if(err) {console.error('postUser error: ' + err);}

        console.log(data.message);

        userRepository.getUserByName(testUserInput.name, function (err, user) {
            if(err) {console.error('getUserByName error: ' + err);}

            testUser = user;
            done();
        });
    });
});

afterEach(function(done){
    userRepository.deleteUsers(function () {
        done();
    });
});

describe('User', function () {
    it('#verifyPassword', function (done) {
        testUser.verifyPassword(testUserInput.password, function (err, isMatch) {
            expect(err).to.be.null;
            expect(isMatch).to.be.true;
            done();
        });
    });
});
