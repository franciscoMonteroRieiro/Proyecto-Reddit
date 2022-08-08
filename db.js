"use strict"

const mysql = require('mysql2/promise');

const {MYSQL_HOST,   MYSQL_USER,   MYSQL_PWD,   MYSQL_DATABASE} = process.env;

let pool;

async function getDB(){
    if(!pool){
        pool = mysql.createPool({
            connectionLimit: 10,
            host: MYSQL_HOST,
            user:MYSQL_USER,
            password: MYSQL_PWD,
            database: MYSQL_DATABASE,
            timezone: "Z"
        })
    }
    return await pool.getConnection()
}

module.exports = getDB;