const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connection Open")
  })
  .catch(e => {
    console.log("Error");
    console.log(e)
  })

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

///CRUD Operations

async function crud() {
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Order.insertMany([
    {
      userid: "afadsad",
      totalitems: 23,
      products: "full products",
      billingaddress: "london",
      shippingaddress: "kingdom",
      transactionstatus: true,
      paymentmode: "default",
      paymentstatus: true,
      orderstatus: true
    },
    {
      userid: "sdsdd",
      totalitems: 2343,
      products: "half products",
      billingaddress: "fish",
      shippingaddress: "kingdom",
      transactionstatus: false,
      paymentmode: "default",
      paymentstatus: true,
      orderstatus: true
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Order.find({ transactionstatus: false })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Order.updateOne({ transactionstatus: false}, { transactionstatus: true})
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Order.deleteMany({ transactionstatus: false})
  console.log("Removed");
  console.log(result);
}


crud();