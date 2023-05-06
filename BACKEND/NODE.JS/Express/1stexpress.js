const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("Hello from Express.js");
});

app.listen(4000, () => console.log("server is running"));
