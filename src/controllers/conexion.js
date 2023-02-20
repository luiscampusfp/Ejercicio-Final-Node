const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'sakila'
});

module.exports = connection;