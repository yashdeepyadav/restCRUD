const express=require("express");
const Category=require("../models/category");
const router=new express.Router();

router.get("/category",async(req,res)=>{
    try{
        const getCategories=await Category.find();
        res.status(201).send(getCategories);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/category/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getCategory=await Category.findById(_id);
        res.status(201).send(getCategory);
    }catch(error){
        res.status(401).send(error);
    }
})

router.post("/category",async(req,res)=>{
    try{
        const categoryData=new Category(req.body);
        const savedData=await categoryData.save();
        res.status(201).send(`Data Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/category/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedCategory=await Category.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedCategory}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/category/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const categoryDeleted=await Category.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${categoryDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports=router;