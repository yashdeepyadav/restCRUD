const mongoose = require('mongoose');




const userschema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  proimage: String,
  role: String,
})



///creating
const User = new mongoose.model('User', userschema);

module.exports=User;