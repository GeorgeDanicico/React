const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userModel = require('../Schema/User')

router.get('/', async (req, res, next) => {
  next();
  res.send("users page")
  
  userModel.find((err, docs) => {
    if (!err) {
        console.log(docs);
    } else {
        console.log('Failed to retrieve the Course List: ' + err);
    }
  });
})

router.get('/new', (req, res) => {
  res.send("New user creation");
})

router.post('/login', async (req, res) => {

  try {

    const query = await userModel
      .find({ email: req.body.email }, 'email password')
    
    if (query.length > 0) {
      const user = query[0];

      if (bcrypt.compare(req.body.password, user.password)) {
        console.log('logged in')
      } else {
        console.log('error logging');
      }

    } else res.status(500).send();


    res.status(201).send();
  } catch {
    res.status(500).send();
  }

})

router.route('/:id')
  .get((req, res) => {
    res.send(`User Get ID ${req.params.id}`)
  })
  .post((req, res) => {
    res.send(`User Post ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`User Delete ID ${req.params.id}`)
  })

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router;