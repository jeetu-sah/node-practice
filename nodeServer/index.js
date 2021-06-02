const http = require('http');

const server  = http.createServer((req ,res) =>{
    res.end('Helllo from other sides ffff');
});

server.listen(8000 , '127.0.0.1',()=>{
   console.log('Listening to the port no 8000');
});
