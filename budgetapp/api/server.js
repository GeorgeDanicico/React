const express = require('express');
const mongoose = require('mongoose');
const app = express();

// mongoose models
const User = require('./Schema/User')

// creating a new user
async function run() {
  const newUser = new User({ 
    name: "George Danicico", 
    age: 20,
    hobbies: ["Snowboarding", "Basketball"],
    email: "georgedanicico@yahoo.com", 
    address: "Big Village, Romania",
  })
  await newUser.save();
  console.log(newUser);
}

mongoose.connect('mongodb://localhost/cicodb', () => {
  console.log("connected successfully to database");
},
  (e) => {
    console.log("ERROR: ", e)
  }
)

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index")
})

const userRouter = require('./routes/users')

app.use('/users', userRouter);

app.listen(3000);
console.log("Server is running and listening...")