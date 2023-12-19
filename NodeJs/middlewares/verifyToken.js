const jwt=require('jwtwebtoken');
const userModel=require('../model/user.model');

const verifyToken=(req,res,next)=>{
    
if(req.headers && req.headers.authorization && req.headers.authorization.split('')[0]==='JWT'){
    jwt.verify(req.headers.authorization.split('')[1],'secretKey',function(err,verifiedToken){
        if(err){
            res.status(401).json({message:"Invalid Token"});
        }
        userModel.findById(verifiedToken._id).then((user)=>{
            req.user=user;
            next()
        }).catch((err)=>{
            res.status(500).send("server not available");
        })
    })
}
}

module.exports=verifyToken;