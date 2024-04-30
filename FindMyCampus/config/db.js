// To access a MySQL database with Node.js, you need a MySQL driver.
const mysql = require("mysql"); // for connecting database

// load environment variables from a .env file into the Node.js process environment.
const dotenv = require("dotenv");
dotenv.config();


// creating connection to database
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function (error) {
    if (error) {
        console.log("Database not connected...");
        throw error;
    } else {
        console.log("Database Connected!");
    }
    
});


// exporting module to our main file
module.exports = connection