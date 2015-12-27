var express = require('express');
    Survey = require('../models/Survey');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//화장품 등록
router.get('/list',function (req,res,next) {
  res.render('cosmetic/registerlist');
});





//설문조사를 위한 라우터
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
