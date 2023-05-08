const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const AdminRoutes = require("./Admin");

const Shoproutes = require("./Shop");

app.use("/admin", AdminRoutes);

app.use("/shop", Shoproutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not found</h1>");
});

app.listen(4000, () => console.log("server 4000 is running"));
