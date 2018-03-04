var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "person 1"},
    {id: 2, username: "person 2"}
  ])
});

module.exports = router;
