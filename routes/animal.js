const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send("animal is comming");
});

// POST method
router.post('/', (req, res) => {
  const payload = req.body;
  console.log("/animal payload received: " + JSON.stringify(payload)); // in heroku logs

  res.send("Animal received");

});



module.exports = router;
