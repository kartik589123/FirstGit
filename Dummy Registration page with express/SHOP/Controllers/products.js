const path = require("path");

exports.getAddproductPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postaddproductpage = (req, res, next) => {
  //res.redirect("/");
};

exports.getproducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
