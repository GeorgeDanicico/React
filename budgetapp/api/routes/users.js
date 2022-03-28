require('dotenv').config();

const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userModel = require('../Schema/User')
const jwt = require('jsonwebtoken');

router.get('/', authenticateToken, async (req, res, next) => {
  res.send("users page")
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

        const accessToken = jwt.sign(
          {
            name: user.name,
            password: user.password,
          }, process.env.ACCESS_TOKEN_SECRET)

        res.status(200).send({ accessToken: accessToken });
      } else {
        res.json({ error: "UNKNOWN ERROR" });
      }

    } else res.status(500).send({ error: "UNKNOWN ERROR1" });
  } catch(err) {
    res.status(500).send({ error: err.message });
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

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

module.exports = router;