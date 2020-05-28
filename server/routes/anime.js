const express = require('express');
const router = express.Router();
const mongo = require('../helpers/mongo')


router.get('/', async function (req, res) {
  const data = await mongo.db.collection('animes').find().toArray()
  res.json(data)
})

router.post('/search', async function (req, res) {
  res.json({ message: 'search' })
})

router.post('/add', async function (req, res) {
  if(req.body){
    await mongo.db.collection('animes').insertOne(req.body).then(res => console.log(res))
  }
  res.json({ message: 'Add' })
})

module.exports = router;