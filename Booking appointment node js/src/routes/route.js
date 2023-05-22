const express = require("express");
const usercontroller = require("../controllers/appointment");

const router = express.Router();

router.get("/", usercontroller.getname);
router.delete("/appointments/:id", usercontroller.deletepost);

router.post("/", usercontroller.userpost);

module.exports = router;
