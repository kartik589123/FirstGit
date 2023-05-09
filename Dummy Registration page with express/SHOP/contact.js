const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/contactus", (req, res, next) => {
  console.log("saas");
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

module.exports = router;
