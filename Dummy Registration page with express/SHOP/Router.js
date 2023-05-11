const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const errorcontroller = require("../Controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));

const AdminRoutes = require("./Admin");

const Shoproutes = require("./Shop");

const contactus = require("./contact");

const successs = require("./success");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../", "public"))); ///to use for accessing file system from website

app.use("/admin", AdminRoutes);

app.use(Shoproutes);

app.use(contactus);

app.use(successs);

app.use(errorcontroller.get404page);

app.listen(4000, () => console.log("server 4000 is running"));
