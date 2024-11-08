const User  =require ("../models/user")

const handleGetAllUsers = async (req, res) => {
    //console.log("I am in get route ", req.myUsername);
    const allDbUsers = await User.find({});
    res.setHeader("X-MyName", "Shashank Shekhar"); // custom header
    // Always add X to custom headers
    return res.json(allDbUsers);
};
const handleGetUserById = async (req,res) =>{
     //const id = Number(req.params.id)
     const user = await User.findById(req.params.id);
     if(!user) return res.status(404).json({error:"user not found"})
     return res.json(user);
}
const handleUpdateUserById =async (req,res) =>{
     //TODO :update new user
     await User.findByIdAndUpdate(req.params.id,{lastName: "Changed"})
     return res.json({status:"Sucess"})
}

const handleDeleteUserById = async (req,res) =>{
     //TODO :delete new user
     await User.findByIdAndDelete(req.params.id)
     return res.json({status:"Sucess"})
}

const handleCreateNewUser = async (req,res) =>{
    const body =req.body;
    //console.log(body);
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return res.status(400).json({error:"Invalid request body"})
    }
    
    const result = await User.create({
        firstName :body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title
    });
    //console.log(result);
    
    return res.status(201).json({msg: "Sucess",id:result._id})
}

module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}