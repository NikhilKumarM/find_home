var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
   res.send(JSON.stringify({ 'house_name': 'Nikki Home', 'Description':'This is great place to be.'  }, null, 3));
});

module.exports = router;
