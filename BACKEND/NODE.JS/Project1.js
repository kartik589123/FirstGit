const http = require("http");

const route = require("./project1module");

const server = http.createServer(route);

server.listen(2000, () => console.log("Server 2000 is running"));
