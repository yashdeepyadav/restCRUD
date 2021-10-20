const express=require("express");
const Tag=require("../models/tag");
const router=new express.Router();

router.get("/tag",async(req,res)=>{
    try{
        const getTags=await Tag.find();
        res.status(201).send(getTags);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/tag/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getTag=await Tag.findById(_id);
        res.status(201).send(getTag);
    }catch(error){
        res.status(401).send(error);
    }
})

router.post("/tag",async(req,res)=>{
    try{
        const tagData=new Tag(req.body);
        const savedData=await tagData.save();
        res.status(201).send(`Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/tag/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedTag=await Tag.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedTag}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/tag/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const tagDeleted=await Tag.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${tagDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})



module.exports=router;