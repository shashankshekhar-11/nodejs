const express =require('express');
const {connectMongoDb} = require("./connection")

const {logReqRes} =require("./Middleware")

const userRouter  = require("./routes/user");

const app=express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(console.log("MongoDB connected"));


//schema


// Middleware to parse JSON bodies
app.use(express.json({extended :false}));
app.use(express.urlencoded({extended:false}));

//middleware 
app.use(logReqRes('log.txt'));


app.use("/api/users",userRouter);

app.listen(PORT,() => console.log(`Port started with port ${PORT}`));
