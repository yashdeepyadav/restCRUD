const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connection Open")
  })
  .catch(e => {
    console.log("Error");
    console.log(e)
  })
const categoryschema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
})

const Category = new mongoose.model('Category', categoryschema);

///CRUD Operations

async function crud() {
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Category.insertMany([
    {
      name: "cat1",
      slug: "slug1",
      image: "not present",
      description: "lorem * 10",
    },
    {
      name: "cat2",
      slug: "slug2",
      image: "not present",
      description: "lorem * 330",
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Category.find({ name: "cat1" })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Category.updateOne({ name: "cat1" }, { slug: "Double Bond" })
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Category.deleteMany({ name: "cat1" })
  console.log("Removed");
  console.log(result);
}


crud();

