const express = require("express");
const mongoose = require("mongoose")
const users =require("./MOCK_DATA.json");
const fs =require("fs");
const app=express();
const PORT = 8000;

//connection
mongoose
.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Mongo Error",err))

//schema
const usersSchema =new mongoose.Schema({
    firstName :{
        type:String,
        required :true,
    },
    lastName :{
        type:String,
        required :false,
    },
    email:{
        type:String,
        required:true, 
        unique: true,
    },
    jobTitle :{
        type:String,
    },
    gender :{
        type :String,
    },
});

const User = mongoose.model("user", usersSchema);

// Middleware to parse JSON bodies
app.use(express.json({extended :false}));
app.use(express.urlencoded({extended:false}));

//middleware 
app.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n${Date.now()}:${req.ip}:${req.method}: ${req.path}\n`,(err,data)=>{
        next();
    })
    // next();
})

// app.use((req,res,next)=>{
//     console.log("Hello from middleware 2");
//     return res.end({msg:"Hello from Middleware 2"})
//     next();
// })
//Routes
app.get("/api/users",(req,res)=>{
    //console.log("I am in get route ",req.myUsername);
    res.setHeader("X-MyName","Shashank Shekhar");//custom header
    //Always add X to custom headers
    return res.json(users);
});

app.get("/users",(req,res) => {
    const html =`
        <ul>
            ${users.map((user) => `<li>${user.first_name }</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

app.route("/api/users/:id")
.get((req,res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error:"user not found"})
    return res.json(user);
}).post((req,res)=>{ 
     //TODO :create new user
   return res.json({status:"pending"})
}).patch((req,res) =>{
    //TODO :update new user
     return res.json({status:"pending"})
}).delete((req,res)=>{
    //TODO :delete new user
    return res.json({status:"pending"})
})

app.post("/api/users",(req,res) =>{
   
    const body =req.body;
    //console.log(body);
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return res.status(400).json({error:"Invalid request body"})
    }
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status:"sucess",id:users.length});
    });
   
})

app.listen(PORT,() => console.log(`Port started with port ${PORT}`));