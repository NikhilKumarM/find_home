var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // res.sendFile('views/luxe/index.html');
    res.sendFile('index.html');
  //res.render();
});

module.exports = router;
//C:\Users\Nikhil Kumar Mengani\WebstormProjects\find_home
//C:\Users\Nikhil Kumar Mengani\WebstormProjects\find_home\views\luxe