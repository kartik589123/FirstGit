const fs = require("fs");

const requesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<title>Project</title>");

    const message = fs.readFileSync("pro.txt").toString().split(" ");
    res.write("<ul");
    for (msg of message) {
      if (msg) res.write(`<li>${msg}</li>`);
    }
    res.write("</ul>");

    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      console.log(chunks);
      body.push(chunks);
    });

    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const message = parsedbody.split("=")[1];
      fs.writeFileSync("pro.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requesthandler;
