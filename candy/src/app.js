const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const userroute = require("./routes/route");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", userroute);
app.use("/not-found", userroute);

app.listen(4000, () => console.log("Server started at 4000"));
