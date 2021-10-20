const mongoose = require('mongoose');



const orderschema = new mongoose.Schema({
  userid: String,
  totalitems: Number,
  products: String,
  billingaddress: String,
  shippingaddress: String,
  transactionstatus: Boolean,
  paymentmode: String,
  paymentstatus: Boolean,
  orderstatus: Boolean

})

const Order = new mongoose.model('Order', orderschema);
module.exports=Order;