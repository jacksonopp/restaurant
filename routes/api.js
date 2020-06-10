var express = require('express');
var router = express.Router();

const reservations = [
  {
    id: 1,
    name: 'name',
    email: 'date',
    phone: 5555555555,
  },
];
const waitlist = [
  {
    name: 'name',
    date: 'date',
    email: 'email',
    phone: 5555555555,
  },
];

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
