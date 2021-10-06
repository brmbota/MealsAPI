const http = require("http");
require("dotenv").config();
const app = require("./app");

const PORT = parseInt(process.env.PORT);
const HOST = process.env.HOST;

http.createServer(app).listen(PORT, HOST, () => {
    console.log(`Server running at localhost:${PORT}`);
});