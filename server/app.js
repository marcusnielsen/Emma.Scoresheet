'use strict';
var config = require('./config/index');
require('./components/mongodb')(config);
var app = require('./components/express')(config);
var server = require('http').createServer(app);
//TODO: var socketio = require('socket.io').listen(server);
//TODO: require('./socketio')(socketio);

// Start server
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});