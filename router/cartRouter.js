const express=require("express");
const Cart=require("../models/cart");
const router=new express.Router();

router.get("/cart",async(req,res)=>{
    try{
        const getCarts=await Cart.find();
        res.status(201).send(getCarts);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/cart/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getCart=await Cart.findById(_id);
        res.status(201).send(getCart);
    }catch(error){
        res.status(401).send(error);
    }
})

router.post("/cart",async(req,res)=>{
    try{
        const cartData=new Cart(req.body);
        const savedData=await cartData.save();
        res.status(201).send(`Data Saved - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/cart/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedCart=await Cart.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`Updated - ${updatedCart}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/cart/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const cartDeleted=await Cart.findByIdAndDelete(_id);
        res.status(201).send(`Deleted - ${cartDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports=router;