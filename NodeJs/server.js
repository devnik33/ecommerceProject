// const express=require("express");
// const app=express();
// const mongoose=require('mongoose');

// mongoose.connect("mongodb://localhost:27017/Swiggy_Geeksdb");
// const db=mongoose.connection;
// db.on('error',()=>{
//     console.log("connection not successfull");
// });

// db.on('open',()=>{
//     console.log("connection successful");
// });

// app.listen('5000',()=>{
//     console.log("server is running on port 5000");
// })

// app.post('/api/restaurants',(req,res)=>{
//     console.log(req);
// })

// require('./routes/restaurants.route')(app);

const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const routes=require("./routes/restaurants.route");
const userRoutes=require("./routes/user.route");
const app=express();
//this is a built in middleware
app.use(bodyParser.json());

//this is a application level middleware

app.use(loggeInUserRequest);


mongoose.connect("mongodb://localhost:27017/Swiggy_Geeksdb");

const db=mongoose.connection;

db.on('error',()=>{
    console.log("something get error to connect db");
});

db.on('open',()=>{
    console.log("connection have successfully ");
})


app.listen('5000',()=>{

console.log('server is running on port 500');
})

app.get('/about',(req,res)=>{
    res.send("learning node js ");
})

// app.post('/restaurants',(req,res)=>{
//     res.send("learning restaurant api");
//    // console.log(req);
// })

function loggeInUserRequest(req,res,next){
    console.log('user is initiated');
    next();
}

routes(app);
userRoutes(app);