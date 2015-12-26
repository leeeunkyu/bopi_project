var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//게시판을 위한 라우터

router.get('/list', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
