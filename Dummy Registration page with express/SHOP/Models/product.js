const fs = require("fs");

const path = require("path");
//let products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(__dirname, "../", "data", "products.json");
    fs.readFile(p, (err, filecontent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(filecontent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchall() {
    const p = path.join(__dirname, "../", "data", "products.json");

    fs.readFile(p, (err, filecontent) => {
      if (err) {
        return [];
      }
      return JSON.parse(filecontent);
    });
  }
};
