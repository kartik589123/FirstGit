const express = require("express");
const path = require("path");

const router = express.Router();

const productcontroller = require("../Controllers/products");

router.get("/", productcontroller.getproducts);

// router.post("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// });

module.exports = router;
