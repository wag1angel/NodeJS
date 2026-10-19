const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "Text/Plain; charset=utf8" });
    res.end("Välkommen till min Server");
});

server.listen(3000, () => {
    console.log("Servern Körs på http://localhost:3000");
});