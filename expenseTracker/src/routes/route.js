const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/expense");

router.get("/", usercontroller.getexpense);
router.delete("/expenses/:id", usercontroller.deleteexpense);
router.post("/", usercontroller.postexpense);

module.exports = router;
