const path = require("path");

exports.get404page = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html")); //__dirname, "../", "views", "404.html")
};
