var express = require('express');
var router = express.Router();

console.log("router object" + router);
router.get('/', function(req, res) {
  res.send(`<h2>Welcome to gaurav.yakhmi</h2>
    `);
});

module.exports = router;
