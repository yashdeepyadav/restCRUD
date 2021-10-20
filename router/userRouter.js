const epxress=require("express");
const User=require("../models/user");
const router=new epxress.Router();

router.get("/user",async(req,res)=>{
    try{
        const allUsers=await User.find();
        res.status(201).send(allUsers);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/user/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const userFind=await User.findById(_id);
        res.status(201).send(userFind);
    }catch(error){
        res.status(400).send(error);
    }
})

router.post("/user",async(req,res)=>{
    // console.log(req.body);
    try{
        const userData=new User(req.body);
        var savedData=await userData.save();
        res.status(201).send(`Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/user/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedData=await User.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/user/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const userDeleted=await User.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${userDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports=router;