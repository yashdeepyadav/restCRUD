const express=require("express");
const Order=require("../models/order");
const router=new express.Router();

router.get("/order",async(req,res)=>{
    try{
        const getOrders=await Order.find();
        res.status(201).send(getOrders);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/order/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getOrder=await Order.findById(_id);
        res.status(201).send(getOrder);
    }catch(error){
        res.status(401).send(error);
    }
})

router.post("/order",async(req,res)=>{
    try{
        const orderData=new Order(req.body);
        const savedData=await orderData.save();
        res.status(201).send(`Data has been saved to database - ${savedData}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.patch("/order/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedOrder=await Order.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(`The order has been updated - ${updatedOrder}`);
    }catch(error){
        res.status(400).send(error);
    }
})

router.delete("/order/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const orderDeleted=await Order.findByIdAndDelete(_id);
        res.status(201).send(`Order deleted - ${orderDeleted}`);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports=router;