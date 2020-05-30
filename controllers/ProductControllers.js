const { db } = require("../connections");

module.exports = {
  getProduct: (req, res) => {
    let sql = `select * from product`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addProduct: (req, res) => {
    let sql = `insert into product set ?`;
    db.query(sql, req.body, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  editProduct: (req, res) => {
    const { id } = req.params;
    let sql = `select * from product where idproduct=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      sql = `update product set ? where idproduct=${id}`;
      db.query(sql, req.body, (err1, result1) => {
        if (err1) res.status(500).send(err1);
        sql = `select * from product where idproduct=${id}`;
        db.query(sql, (err2, result2) => {
          if (err2) res.status(500).send(err2);
          res.status(200).send(result2);
        });
      });
    });
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    let sql = `delete product where idproduct=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send({ message: "Product Berhasil Dihapus" });
    });
  },
  getProductDetails: (req, res) => {
    let sql = `select * from product where idproduct=${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
};
