const mysql = require("mysql");

const db = mysql.createConnection({
  host: "db4free.net",
  user: "fuadariqoh",
  password: "afong456",
  database: "tesdeploy",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("udah connect");
});

module.exports = db;
