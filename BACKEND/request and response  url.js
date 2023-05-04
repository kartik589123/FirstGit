const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>Welcome Home</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>Welcome to About Us page</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>Welcome to my Node Js project</body>");
    res.write("</html>");
    return res.end();
  }

  //   res.setHeader("Content--Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>My first page</title></head>");
  //   res.write("<body><h1>Hello from my Node-Js Server</h1></body>");
  //   res.write("</html>");
  //   res.end();
});

server.listen(4000, () => {
  console.log("Server 4000 is running");
});
