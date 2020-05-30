const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>SELAMAT DATANG DI API ARISTOTLE ROASTERY</h1>");
});

const { authRouters, productRouters } = require("./routers");
app.use("/users", authRouters);
app.use("/product", productRouters);

app.listen(PORT, () => console.log(`APP JALAN DI PORT ${PORT}`));
