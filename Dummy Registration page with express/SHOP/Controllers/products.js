const path = require("path");
const Product = require("../Models/product");

exports.getAddproductPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postaddproductpage = (req, res, next) => {
  const product = new Product(req.body.title);
  console.log(product);
  product.save();
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.redirect("/");
};

exports.getproducts = (req, res, next) => {
  const products = Product.fetchall();
  console.log(products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
