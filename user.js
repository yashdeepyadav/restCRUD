const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connection Open")
  })
  .catch(e => {
    console.log("Error");
    console.log(e)
  })

const userschema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  proimage: String,
  role: String,
})



///creating
const User = new mongoose.model('User', userschema);

///CRUD Operations

async function crud(){
  await insert();
  await read();
  await update();
  await remove();
}

///inserting

async function insert() {

  const result = await User.insertMany([
    {
      fname: "Jason",
      lname: "Bourne",
      email: "jb@gmail.com",
      proimage: "not available",
      role: "Secret Agent"
    },
    {
      fname: "James",
      lname: "Bond",
      email: "bond@007.com",
      proimage: "Not available",
      role: "Top secret Agent"
    }

  ])

  console.log("Inserted");
  console.log(result);

}


///reading

async function read() {

  const result = await User.find({ lname: "Bond" })
  console.log("Found");
  console.log(result);
}


///updating
async function update() {
  const result = await User.updateOne({ lname: "Bond" }, { lname: "Double Bond" })
  console.log("Updated");
  console.log(result);
}

///Deleting
async function remove() {
  result = await User.deleteMany({ lname: "Bond" })
  console.log("Removed");
  console.log(result);
}


crud();