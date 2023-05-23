const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const userroute = require("./routes/route");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", userroute);

app.listen(3000, () => console.log("server 3000 is running"));
