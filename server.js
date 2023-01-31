const app = require("./app/app");

const http = required("http");
require("dotenv").config();

http.createServer(app).Listen(3000, () => {
    console.log(`Server is running in port ${process.env.port}`);
});