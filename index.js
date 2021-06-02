
const http = require('http');
const fs = require("fs");

const server = http.createServer((req , res)=>{
    console.log(req.url);
    res.end('Welcome to my first node js application');
});

server.listen(8000 , '127.0.0.1',()=>{
     console.log('Listing to the port 127.0.0.1');
});