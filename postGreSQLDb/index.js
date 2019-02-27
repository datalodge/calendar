const pgSql = require('pg');
const pgSqlConfig = require('./pgsql-config.js');

const connection = pgSql.createConnection(pgSqlConfig);

