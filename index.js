const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
  console.log("Connection Open")
})
.catch(e=>{
  console.log("Error");
  console.log(e)
})