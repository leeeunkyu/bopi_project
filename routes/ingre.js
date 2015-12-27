var express = require('express');

var router = express.Router();

router.get('/search',function (req,res,next) {
  console.log('1');
  res.render('ingredient/cos');
});
module.exports = router;
