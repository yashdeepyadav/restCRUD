const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser=require("body-parser");


mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
  console.log("Connection Open")
})
.catch(e=>{
  console.log("Error");
  console.log(e)
})

const UserRouter=require("./router/userRouter"); 
const ProductRouter=require("./router/productRouter"); 
const TagRouter=require("./router/tagRouter"); 
const RoleRouter=require("./router/roleRouter"); 
const CategoryRouter=require("./router/categoryRouter"); 
const CartRouter=require("./router/cartRouter"); 
const OrderRouter=require("./router/orderRouter");



app.use(UserRouter);  
app.use(ProductRouter); 
app.use(TagRouter); 
app.use(RoleRouter);
app.use(CategoryRouter); 
app.use(CartRouter); 
app.use(OrderRouter); 

app.listen(27017,()=>{
    console.log(`App is running on port 27017`);
})

app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.json());












