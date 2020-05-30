const mysql = require("mysql");

const db = mysql.createConnection({
  host: "db4free.net",
  user: "fuadariqoh",
  password: "password",
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
