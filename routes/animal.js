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

  let animal = req.body;
  animal.valide = true;


  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(animal));


});



module.exports = router;
