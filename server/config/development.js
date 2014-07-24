'use strict';

module.exports = {
    mongo: {
           uri: process.env.MONGOLAB_URI ||process.env.MONGOHQ_URL || 'mongodb://localhost/emma-scoresheet-dev'
    },
    // Should we populate the DB with sample data?
    seedDB: true
};