var express = require('express');
var router = express.Router();

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
  if (reservations.length < 5) {
    user.id = reservations.length + 1;
    console.log(user);
    reservations.push(user);
  } else {
    user.id = waitlist.length + 1;
    waitlist.push(user);
  }
  res.json({
    reservations,
    waitlist,
    new_reservation: user,
  });
});

module.exports = router;
