const http = require('http');
//const fs =  require('fs');
//const url = require('url');
const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    return res.send("Hello from Homepage" );
});

app.get("/about",(req,res) =>{
    return res.send(`Hello from About Page
        from ${req.query.name}
        age: ${req.query.age}`

    );
})

// function myHandler (req,res){
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()} : ${req.method} ${req.url} New Request recieved \n`
//     const myUrl =url.parse(req.url,true);
//     //console.log(myUrl,true);
    
//     fs.appendFile('log.txt', log, (err,data) =>{
//         switch(myUrl.pathname){
//             case "/":
//                 res.end("HomePage");
//                 break;
//             case "/about":
//                 const userName = myUrl.query.myName;
//                 res.end(`Hi, ${userName}`);
//                 break;
//             case "/search" :
//                 const searchQuery = myUrl.query.searchQuery;
//                 //console.log(searchQuery);
//                 res.end(`Your search result for ${searchQuery}`)
//             case "/contact":
//                 res.end("Contact Page");
//                 break;
//             case "/signUp":
//                 if(req.method == 'GET') res.end("This is a signUp form");
//                 else if(req.method == 'POST'){
//                     // DB Query
//                     res.end("Sign Up Successfull");
                    
//                 }
//                 break;
//             default:
//                 res.end ("404 not found");
//                 break;

//         }
//     });
// }
// const myServer = http.createServer(app);
   



// myServer.listen(8000,() =>{
//     console.log("server is running on port 8000");
// });

app.listen(8000,()=> console.log( "server is running on port 8000"));

