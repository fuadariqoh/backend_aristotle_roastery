const express = require("express");
const { authControllers } = require("../controllers");
const router = express.Router();

router.get("/keeplogin", authControllers.keeplogin);
router.get("/getusers", authControllers.getUsers);
router.post("/addusers", authControllers.addUsers);
router.put("/editusers:id", authControllers.editUsers);

module.exports = router;
