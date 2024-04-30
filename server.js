const http = require("http");

const server = http.createServer((request, response) => {
    console.log("toto");
});

server.listen(3000)

