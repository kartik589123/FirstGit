const http = require("http");

const server = http.createServer((req, res) => {
  console.log("kartik");
});

server.listen(4000, () => {
  console.log("kartik");
});
