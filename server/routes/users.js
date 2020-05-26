const express = require('express');
const router = express.Router();
const mongo = require('../helpers/mongo')
const bcrypt = require('bcrypt')

router.post('/login', function(req, res) {
  login(req.body)
  .then(token => res.send(token))
  .catch(err => {
    console.error(err)
    if (err.code) res.status(err.code).send(err.message)
    else res.status(500).send({ status: 'error', message: 'A problem was occured in login user' })
  })
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
})

router.post('/token', function(req, res) {
  if(!req.body) res.status(400).send('Provide user in body request to get token')
  getToken(req.body.username)
  .then(token => res.send(token))
  .catch(err =>{
    console.error(err)
    if(err.code) res.status(err.code).send(err.message)
    else res.status(500).send({status: 'error', message: 'A problem was occured when getting token'})
  })
})

router.post('/token/isadmin', function(req, res) {
  if(!req.body) res.status(400).send('Provide user in body request')
  isAdmin(req.body.username)
  .then(state => res.send({isadmin: true}))
  .catch(err => res.send({isadmin: false}))
})

async function register(user) {
  const userExist = await mongo.db.collection('user').findOne({name: user.username})
  const password = user.password
  if(!userExist){
    let userToDb = {
      username: String,
      password: String,
      animeList: [],
      mangaList: [],
      favList: []
    }
    const hash = await bcrypt.hash(user.password, 10)
    userToDb.username = user.username
    userToDb.password = hash
    await mongo.db.collection('user').insertOne(userToDb)
    return login(user)
  } else {
    const error = new Error('User already exists')
    error.code = 401
    throw error
  }
}
async function login(user) {
 const userDb = await mongo.db.collection('user').findOne({username: user.username})
 if(!userDb) {
   const error = new Error('User does not exist')
   error.code = 404
   throw error
 }
 const dbPass = userDb.password
 const result = await bcrypt.compare(user.password, dbPass)
 if(!result){
   const error = new Error('Password incorect')
   error.code = 403
   throw error
 }
 const token = await generateToken(32)
 await mongo.db.collection('user').updateOne({username: user.username}, {$set: {token: token}})
 return token
}
function generateToken(length) {
  const symbolAuth = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  const tokenArray = [];
  for (let i = 0; i < length; i++) {
    let random = (Math.random() * (symbolAuth.length - 1)).toFixed(0);
    tokenArray[i] = symbolAuth[random];
  }
  return { token } = tokenArray.join("");
}
async function getToken(username){
  const user = await mongo.db.collection('user').findOne({username: username})
  if(user) return user
  else{
    const error = new Error('User does not exist')
    error.code = 404
    throw error
  }
}
async function isAdmin(username){
  const user = await mongo.db.collection('user').findOne({username: username})
  if(user.isadmin) return user.isadmin
  else{
    const error = new Error('User does not exist')
    error.code = 404
    throw error
  }
}

module.exports = router;