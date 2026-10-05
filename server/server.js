const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Vehicle Server is running!");
});

server.listen(3000, () => {
    console.log("Server berjalan pada http://localhost:3000");
});