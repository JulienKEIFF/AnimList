const express = require('express');
const router = express.Router();
const mongo = require('../helpers/mongo')
const bcrypt = require('bcrypt')

router.post('/login', function(req, res) {
  res.json({message: 'API users login'});
});

router.post('/register', function(req, res) {
  if(!req.body) res.status(400).send('Provide user in body request to register')
  register(req.body)
  .then(token => res.send(token))
  .catch(err => {
    console.error(err)
    if(err.code) res.status(err.code).send(err.message)
    else res.status(500).send({status: 'error', message: 'A problem was occured in register user'})
  })
  res.json({message: 'API user register'})
})

async function register(user) {
  const userExist = await mongo.db.collection('user').findOne({name: user.name})
  const password = user.password
  if(!userExist){
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
    user.list = []
    await mongo.db.collection('user').insertOne(user)
  }
}

module.exports = router;