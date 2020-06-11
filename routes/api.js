var express = require('express');
var router = express.Router();
const { random } = require('lodash');

const reservations = [];
const waitlist = [];

/* GET users listing. */
router.get('/reservation', function (req, res, next) {
  res.json({
    reservations,
    waitlist,
  });
});

router.post('/reservation', (req, res) => {
  const user = req.body;
  let success;
  if (reservations.length < 5) {
    user.id = random(100000, 999999);
    success = true;
    reservations.push(user);
  } else {
    user.id = random(100000, 999999);
    success = false;
    waitlist.push(user);
  }
  res.json({
    reservations,
    waitlist,
    new_reservation: user,
    success,
  });
});

module.exports = router;
