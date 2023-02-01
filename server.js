const http = require(`http`);
const app = require('./app/app');
require('dotenv').config();

http.createServer(app).Listen(process.env.port, () => {
    console.log(`Server is running in port ${process.env.port}`);
});


