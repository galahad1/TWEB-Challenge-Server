const express = require('express');
const router = express.Router();

var Chance = require('chance'),
  chance = new Chance();

/* GET chance page. */
router.get('/', (req, res) => {
res.send(chance.animal());
});



module.exports = router;
