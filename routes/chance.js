/* eslint-disable one-var */
const express = require('express');

const router = express.Router();
const Chance = require('chance'),
  chance = new Chance();

/* GET chance page. */
router.get('/', (req, res) => {
  res.send(chance.animal());
});


module.exports = router;
