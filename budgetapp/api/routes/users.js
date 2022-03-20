const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
  next();
  res.send("All users ")
})

router.get('/new', (req, res) => {
  res.send("New user creation");
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