const userModel=require('../model/user.model');
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");

exports.register=(req,res)=>{

    const {fullName,email,password}=req.body;
    const newUser=new userModel({
        fullName,
        email,
        password:bcrypt.hashSync(password,10),
    })

    userModel.findOne({email}).then((data)=>{
        if(data){
          return res.status(400).json({message:"user already registered"});
        }else{
            newUser.save().then((data)=>{
                if(data){
                    return res.status(200).json({message:"user register successfully"});
                }
            })
        }
    }).catch((err)=>{
        return res.status(500).send({message:"server not available"});
    })

}



exports.login=(req,res)=>{
    const {email,password}=req.body;
console.log(req.body);
    userModel.findOne({email}).then((data)=>{
        console.log(data);
        if(!data){
            return res.status(404).json({message:"user not found"});
        }
        const isValidPassword=bcrypt.compareSync(password,data.password);
console.log(isValidPassword,'isvalid');
        if(!isValidPassword){
            return res.status(401).send("Invalid Password,please send the correct password");

        }
        let accessToken=jwt.sign({ id : data._id},"secretKey",{
            expiresIn:"1h",
        });

console.log(accessToken,'accessToken');
        res.send({
            user:{
                fullName:data.fullName,
                email:data.email,
              
            },
            token:accessToken,
        })

        

    }).catch((err)=>{
        res.status(500).send("server not available");
    })
}