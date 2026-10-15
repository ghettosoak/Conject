// Lazy MySQL pool for the openDE thesaurus (see openDE_2015-02-17.sql).
// Replaces php/delicious.php; credentials now come from the environment.
const mysql = require('mysql2/promise');

let pool;

module.exports = function getPool() {
	if (!pool) {
		pool = mysql.createPool({
			host: process.env.DB_HOST || 'localhost',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASSWORD || '',
			database: process.env.DB_NAME || 'openDE',
			charset: 'utf8mb4',
			connectionLimit: 5
		});
	}
	return pool;
};
