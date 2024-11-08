const mongoose = require("mongoose")

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
   
}, {timestamps: true});
const User = mongoose.model("user", usersSchema);

module.exports = User;