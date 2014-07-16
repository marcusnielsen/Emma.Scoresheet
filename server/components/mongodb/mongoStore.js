'use strict';

module.exports = function (app, config) {
    var session = require('express-session');
    var mongoStore = require('connect-mongo')(session);

    // Persist sessions with mongoStore
    app.use(session({
        secret: config.secrets.session,
        store: new mongoStore({
            url: config.mongo.uri,
            collection: 'sessions'
        }, function () {
            console.log('db connection open' );
        })
    }));
};
