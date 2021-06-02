//Stream that objects let you read data from a source or write data to a destination in continuous fashion. in node js there are four type of streams 

//streaming mean listening to music or watching video in real time, instead of downloading a file  to your computer and watching it later 

//Readable: stream which is used for read operation
//writable: Stream which is used for write operation
// duplex: stream which can be used for both read and write operation 
//Transform: A type of duplex stream where the output is computed based input.

const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on("request", (req , res)=>{
    // fs.readFile('file.txt' , function(err , data){
    //     if(err){
    //         return console.error(err);
    //     } 
    //    res.end(data.toString());
    // });

    // second way 
    const rstream = fs.createReadStream('file.txt');
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on('end',(chunkdata)=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err);
        res.end("file not found");
    })
    
});

server.listen(8000 , '127.0.0.1',()=>{
   console.log('Listening to the port no 8000');
});




