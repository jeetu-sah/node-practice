const fs = require("fs");
// define a object object called bioData

const bioData = {
    name:"Jitendra sahu ",
    age:"26"
}

// Change object in to json
//JSON.stringify method use for change object into json 
// object => json (JSON.stringify)
const bioJson = JSON.stringify(bioData);

console.log("Json:"+ bioJson);


// Change json  in to object
//JSON.parse method use for change json  into  object
// json  =>  object (JSON.parse)
const bioObject = JSON.parse(bioJson);
//console.log("Object : "+ bioObject);
console.log('Object');
console.log(bioObject);


/*working*/
//Write a file using fs 
fs.writeFile('bioData.json',bioJson,(err)=>{
    console.log('Done')
    //console.log(JSON.parse(bioJson))
});

//Read a file using fs 
fs.readFile('bioData.json','utf-8',(err , dataResponseInJson)=>{
    console.log('read file ')
    console.log(dataResponseInJson)
    //console.log(JSON.parse(bioJson))
});
