const { db } = require("../connections");

module.exports = {
  getUsers: (req, res) => {
    const { username, password } = req.query;

    let sql = `SELECT * FROM USERS where username='${username}' AND password='${password}'`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      if (result.length) {
        console.log(result[0]);
        return res.status(200).send(result[0]);
      }
    });
  },
  addUsers: (req, res) => {
    const { username, password, email } = req.body;
    let sql = `SELECT * FROM USERS WHERE username='${username}'`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      if (result.length) {
        console.log(result.length);
        return res.status(200).send({ status: false });
      }
      sql = `INSERT INTO USERS SET ?`;
      var obj = { username, password, email, role: 1 };

      db.query(sql, obj, (err1, result1) => {
        console.log("masuk");
        if (err1) res.status(500).send(err1);
        sql = `select * from users where username=${username}`;
        db.query(sql, (err2, result2) => {
          if (err2) res.status(500).send(err2);
          res.status(200).send(result2);
        });
      });
    });
  },
  editUsers: (req, res) => {
    const { id } = req.params;
    const { username, password, newpassword, email } = req.body;
    let sql = `SELECT * FROM USERS WHERE username='${username}'`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      if (!result) {
        res
          .status(200)
          .send({ errorMessage: "Password lama yang anda masukkan salah" });
      }
      obj = { username: username, password: newpassword, email };
      let sql = `update users set ? where idusers=${id}`;
      db.query(sql, obj, (err1, result1) => {
        if (err1) res.status(500).send(err1);
        res.status(200).send({ successMessage: "Update Data Berhasil" });
      });
    });
  },
  keeplogin: (req, res) => {
    console.log(req.users);
    let sql = `select * from users }`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
    });
  },
};
