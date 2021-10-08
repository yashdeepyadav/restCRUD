const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connection Open")
  })
  .catch(e => {
    console.log("Error");
    console.log(e)
  })

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

///CRUD Operations

async function crud() {
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Product.insertMany([
    {
      name: 'tortoise',
      thumbnail: 'na',
      productgallery: 'na',
      description: 'write ur own',
      baseprice: 233,
      sellprice: 455,
      categoryname: 'ud',
      tags: 'na',
      additionalinformation: 'done'
    },
    {
      name: 'turtle',
      thumbnail: 'na',
      productgallery: 'na',
      description: 'write ur own',
      baseprice: 673,
      sellprice: 785,
      categoryname: 'ud',
      tags: 'na',
      additionalinformation: 'done'
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Product.find({ tags: 'na' })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Product.updateOne({ tags: 'na' }, { tags: 'insta' })
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Product.deleteMany({ tags: 'na' })
  console.log("Removed");
  console.log(result);
}


crud();