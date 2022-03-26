const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json())

// mongoose models
const User = require('./Schema/User')

// creating a new user
async function run() {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash('polopolo2001', salt);
  

  const newUser = new User({ 
    name: "George Danicico", 
    age: 20,
    hobbies: ["Snowboarding", "Basketball"],
    email: "georgedanicico@yahoo.com", 
    address: "Big Village, Romania",
    password: hashedPassword,
  })
  await newUser.save();
  console.log(newUser.id);
}

mongoose.connect('mongodb://localhost/cicodb', async () => {
  console.log("connected successfully to database");
  // run();
},
  (e) => {
    console.log("ERROR: ", e)
  }
)

app.get('/', (req, res) => {
  res.send("index")
})

const userRouter = require('./routes/users')

app.use('/users', userRouter);

app.listen(3000);
console.log("Server is running and listening...")