const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
  console.log("Connection Open")
})
.catch(e=>{
  console.log("Error");
  console.log(e)
})

const cartschema = new mongoose.Schema({
  product: String,
  user: String,
  productquantity: Number,
  baseprice: Number,
  sellprice: Number,
  totalprice: Number,
})

const Cart = new mongoose.model('Cart', cartschema);

///CRUD Operations

async function crud(){
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Cart.insertMany([
    {
      product: "Mango",
  user: "Hapoos Uncle",
  productquantity: 10,
  baseprice: 12,
  sellprice: 20,
  totalprice: 200,
    },
    {
      product: "Rasna",
  user: "Thief",
  productquantity: 23,
  baseprice: 34,
  sellprice: 40,
  totalprice: 546,
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Cart.find({ product: "Rasna" })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Cart.updateOne({ product: "Rasna" }, { baseprice: 25 })
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Cart.deleteMany({ baseprice: 25 })
  console.log("Removed");
  console.log(result);
}


crud();