//Event Module : 
// Nodejs has multiple inbuild module called  "Event"
//where you can create, fire and listen your own events.

const http = require('http');
const EventEmitter = require('events');
const event = new EventEmitter();



    event.on('syaMyName',()=>{
        //res.end("our name is jitendra");
       console.log("Your name is jitendra.");
    });

    event.on('syaMyName',()=>{
        console.log("Your name is kumar.");
    });

    event.on('syaMyName',()=>{
        console.log("Your name is sahu.");
    });

    event.on('checkPage',(sc , msg)=>{ 
        console.log(`status code is ${sc} and the page is ${msg}`);
    });
    event.emit("syaMyName");
    event.emit("checkPage" , 200 , "OK");


// server.listen(8000 , '127.0.0.1',()=>{
//         console.log("Our server listening");
// });



