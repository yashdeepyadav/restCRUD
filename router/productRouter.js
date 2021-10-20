const express=require("express");
const Product=require("../models/product");
const router=new express.Router();

router.get("/product",async(req,res)=>{
    try{
        const getProducts=await Product.find();
        res.status(201).send(getProducts);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/product/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getProduct=await Product.findById(_id);
        res.status(201).send(getProduct);
    }catch(error){
        res.status(401).send(error);
    }
})



router.post("/product",async(req,res)=>{
    try{
        const productData=new Product(req.body);
        const savedData=await productData.save();
        res.status(201).send(`Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/product/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const productDeleted=await Product.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${productDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/product/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedProduct=await Product.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedProduct}`);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports=router;