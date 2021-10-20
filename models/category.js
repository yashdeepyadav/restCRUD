const mongoose = require('mongoose');


const categoryschema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
})

const Category = new mongoose.model('Category', categoryschema);

module.exports=Category;