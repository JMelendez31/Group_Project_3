const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'happiness_db',
    password: '106SM##sm06',
    port: 5432
});

module.exports = pool;