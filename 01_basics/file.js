// file handline 


const fs = require("fs");

const os = require('os');
console.log(os.cpus().length);

//sync operation also called "Blocking request"

fs.writeFileSync('./test.txt',"Hey there")


//Async operation called "Non Blocking request"

// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// const result = fs.readFile("./contact.txt","utf-8", (err,result) =>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });
//console.log(result);

fs.appendFileSync("test.txt","7");
