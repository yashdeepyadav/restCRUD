const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
  console.log("Connection Open")
})
.catch(e=>{
  console.log("Error");
  console.log(e)
})

const tagschema = new mongoose.Schema({
  name: String,
  slug: String,
})

///creating
const Tag = new mongoose.model('Tag', tagschema);

///CRUD Operations

async function crud(){
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await Tag.insertMany([
    {
      name: 'prince',
      slug: 'na',
    },
    {
      name: 'princess',
      slug: 'na',
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await Tag.find({ name: 'prince' })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await Tag.updateOne({ name: 'prince' }, { name: "Double Bond" })
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await Tag.deleteMany({ name: 'prince' })
  console.log("Removed");
  console.log(result);
}


crud();


