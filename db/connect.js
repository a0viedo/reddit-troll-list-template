var knex = require('knex');

var connect = function() {
    return knex({
        client: 'postgres',
        debug: true,
        connection: {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        }
    });
};

module.exports = connect;

