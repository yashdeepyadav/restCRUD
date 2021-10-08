const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connection Open")
  })
  .catch(e => {
    console.log("Error");
    console.log(e)
  })

const roleschema = new mongoose.Schema({
  name: String,
  slug: String,
})

const Role = new mongoose.model('Role', roleschema);

///CRUD Operations

async function crud() {
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Role.insertMany([
    {
      name: 'queen',
      slug: 'na',
    },
    {
      name: 'king',
      slug: 'same as queen',
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Role.find({ slug: 'na' })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Role.updateOne({ slug: 'na' }, { slug: 'better than king'})
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Role.deleteMany({ slug: 'na' })
  console.log("Removed");
  console.log(result);
}


crud();