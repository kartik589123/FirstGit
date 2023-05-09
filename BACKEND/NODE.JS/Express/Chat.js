const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const session = require("express-session");

app.use(
  session({
    secret: "kkk",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/login", (req, res, next) => {
  res.send(
    '<form action="/temp" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>'
  );
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/temp", (req, res, next) => {
  const user = req.body.username;

  req.session.username = user;

  res.send(`
    <script>
      localStorage.setItem("username", JSON.stringify("${user}"));
      window.location.href = "/temp1";
    </script>
  `);
});
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/temp1", (req, res, next) => {
  const u = req.session.username;
  const message = fs.readFileSync("chat.txt");
  res.send(
    `<ul>${message}</ul><form action="/temp1" method="POST"><input type="text" name="us"><button type="submit">Send</button></form>`
  );
});

app.post("/temp1", (req, res, next) => {
  const user = req.body.us;
  const username = req.session.username;

  const content = `${username}:${user}`;
  fs.writeFileSync("chat.txt", content, { flag: "a" });

  res.redirect("/temp1");
});

app.listen(4000, () => console.log("server 4000 is running"));
