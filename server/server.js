const http = require("http");
const vehicles = require("./data");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/api/vehicles") {

        res.writeHead(200, {
            "Content-Type": "application/json",
             "Access-Control-Allow-Origin": "*"
        });

        res.end(JSON.stringify(vehicles));

        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Endpoint tidak ditemukan"
    }));
});

server.listen(3000, () => {
    console.log("Server berjalan pada http://localhost:3000");
});