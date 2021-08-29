const http = require("http");
require("dotenv").config();
const app = require("./app");

const PORT = parseInt(process.env.PORT);

http.createServer(app).listen(PORT,()=>{
    console.log(`Server running at localhost:${PORT}`);
});