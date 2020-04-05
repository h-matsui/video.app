'use strict';

const config = {
    MYSQL_HOST: '133.167.37.185',
    MYSQL_DB: 'movies',
    MYSQL_USER: 'hidekazu',
    MYSQL_PASSWORD: 'yNks#55311819',
    MYSQL_CONNECTIONPOOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module exports = config;