const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const axios = require("axios");
const datarepo = require("./repository/appointment");

const app = express();
app.use(cors());
const userroute = require("./routes/route");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", userroute);

app.listen(4000, () => {
  console.log("server started at port 4000");
  // const repo = new datarepo();
  // repo.deletedata(8);
});
