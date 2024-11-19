var mysql = require('mysql');
var dotenv = require('dotenv');

dotenv.config();

var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

var connection = mysql.createConnection(config);
module.exports = connection;