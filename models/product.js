const mongoose = require('mongoose');


const productschema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  productgallery: String,
  description: String,
  baseprice: Number,
  sellprice: Number,
  categoryname: String,
  tags: String,
  additionalinformation: String


})

const Product = new mongoose.model('Product', productschema);

module.exports=Product;