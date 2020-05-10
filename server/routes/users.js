const express = require('express');
const router = express.Router();

router.post('/login', function(req, res) {
  res.json({message: 'API users login'});
});

router.post('/register', function(req, res) {
  res.json({message: 'API user register'})
})

module.exports = router;