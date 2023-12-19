const restaurantModel=require('../model/restaurants.model')
exports.create=(req,res)=>{
  const {name,avgRating,cuisines,cloudinaryImageId,costForTwo,menuItems}=req.body;

  const newRestaurants=new restaurantModel({
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    menuItems,
  })

  newRestaurants.save().then((data)=> {
    if(!data){
        res.status(400).send("data not found");
    }
    res.send(data);
  }).catch(err=>res.status(500).json({message:"server not available"}))
}

exports.fetch=(req,res)=>{
  restaurantModel.find().then((data)=>{
    if(!data){
      res.status(404).json({message:"data not found"});
    }
    res.send(data);
  }).catch((err)=>res.status(500).json({message:"server not available"}));
}

exports.fetchOne=(req,res)=>{
  const _id=req.params.id
  restaurantModel.findOne({_id:_id}).then((data)=>{
    if(!data){
      res.status(404).json({message:"data not found"});
    }
    res.send(data);
  }).catch((err)=>res.status(500).json({message:"server not avaiable"}));
}

exports.updateOne=(req,res)=>{
  const _id=req.params.id;
  restaurantModel.findByIdAndUpdate(_id,{avgRating:'4.0'}).then((data)=>{
    if(!data){
      res.status(404).json({message:"data not found"});
    }
    res.send(data);

  }).catch((err)=>data.status(500).json({message:"server not available"}));
}

exports.deleteOne=(req,res)=>{
  const _id=req.params.id;
  restaurantModel.findByIdAndDelete(_id).then((data)=>{
    if(!data){
      res.status(404).json({message:"data not found"});
    }
    res.send(data);
  }).catch((err)=>res.status(500).json({message:"server not available"}));
}