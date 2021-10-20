const express=require("express");
const Role=require("../models/role");
const router=new express.Router();

router.get("/role",async(req,res)=>{
    try{
        const getRoles=await Role.find();
        res.status(201).send(getRoles);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/role/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getRole=await Role.findById(_id);
        res.status(201).send(getRole);
    }catch(error){
        res.status(401).send(error);
    }
})

router.post("/role",async(req,res)=>{
    try{
        const roleData=new Role(req.body);
        const savedData=await roleData.save();
        res.status(201).send(`Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/role/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedRole=await Role.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedRole}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/role/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const roleDeleted=await Role.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${roleDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})



module.exports=router;