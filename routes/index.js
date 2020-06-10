var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res) => {
  // res.render('list', { title: 'List' });
  res.sendFile(path.join(__dirname, '../public/list.html'));
});

router.get('/reservations', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/reservations.html'));
});

module.exports = router;
