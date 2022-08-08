"use strict";
require("dotenv").config();

const getDB = require("./db");

let connection;

async function main() {
  try {
    connection = await getDB();
    console.log("Creo tabla likes");

    await connection.query(`
    CREATE TABLE likes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    photo_id INT NOT NULL,
    created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE INDEX user_id_UNIQUE (user_id));`);
  } catch (error) {
    console.error(error.message);
  } finally {
    //libero la connection
    if (connection) {
      connection.release();
    }
    process.exit();
  }
}

main();
