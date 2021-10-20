const mongoose = require('mongoose');



const roleschema = new mongoose.Schema({
  name: String,
  slug: String,
})

const Role = new mongoose.model('Role', roleschema);

module.exports=Role;