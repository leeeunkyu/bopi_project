var express = require('express');
    Survey = require('../models/Survey');
    Cosmetic = require('../models/Cosmetic');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//화장품 등록


router.get('/list',needAuth, function(req, res, next) {
  var page = req.query.page || 1;
  page = parseInt(page, 10);
  var perPage = 10;
  Cosmetic.count(function(err, count) {
    Cosmetic.find({}).sort({createdAt: -1})
    .skip((page-1)*perPage).limit(perPage)
    .exec(function(err, coslists) {
      if (err) {
        return next(err);
      }
      res.render('cosmetic/registerlist', {
        coslists: coslists,
        pagination: pagination(count, page, perPage, function(p) {
          return '/cosmetic/registerlist?page=' + p;
        })
      });
    });
  });
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

function needAuth(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.flash('danger', '로그인이 필요합니다.');
      res.render('index');
    }
}

function pagination(count, page, perPage, funcUrl) {
  var pageMargin = 3;
  var firstPage = 1;
  var lastPage = Math.ceil(count / perPage);
  var prevPage = Math.max(page - 1, 1);
  var nextPage = Math.min(page + 1, lastPage);
  var pages = [];
  var startPage = Math.max(page - pageMargin, 1);
  var endPage = Math.min(startPage + (pageMargin * 2), lastPage);
  for(var i = startPage; i <= endPage; i++) {
    pages.push({
      text: i,
      cls: (page === i) ? 'active': '',
      url: funcUrl(i)
    });
  }
  return {
    numLists: count,
    firstPage: {cls: (page === 1) ? 'disabled' : '', url: funcUrl(1)},
    prevPage: {cls: (page === 1) ? 'disabled' : '', url: funcUrl(prevPage)},
    nextPage: {cls: (page === lastPage) ? 'disabled' : '', url: funcUrl(nextPage)},
    lastPage: {cls: (page === lastPage) ? 'disabled' : '', url: funcUrl(lastPage)},
    pages: pages
  };
}
module.exports = router;
