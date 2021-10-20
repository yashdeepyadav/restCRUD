const mongoose = require('mongoose');




const tagschema = new mongoose.Schema({
  name: String,
  slug: String,
})

///creating
const Tag = new mongoose.model('Tag', tagschema);

module.exports=Tag;