var express = require('express');
    Survey = require('../models/Survey');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/survey',function(req,res,next){
  res.render('cosmetic/survey');
});
router.post('/survey/complete',function (req,res,next) {
  var survey = new Survey({
    value:req.body.value
  });
  console.log(survey);
  console.log(survey.value);
  res.render('cosmetic/result');
});

module.exports = router;
