const express = require("express");
const path = require("path");
const router = express.Router();
const productscontroller = require("../Controllers/products");

//const rootdir = require("../Util/path"); try out later
router.get("/add-product", productscontroller.getAddproductPage);

router.post("/add-product", productscontroller.postaddproductpage);

module.exports = router;
