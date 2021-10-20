const mongoose = require('mongoose');


const cartschema = new mongoose.Schema({
  product: String,
  user: String,
  productquantity: Number,
  baseprice: Number,
  sellprice: Number,
  totalprice: Number,
})

const Cart = new mongoose.model('Cart', cartschema);

module.exports=Cart;