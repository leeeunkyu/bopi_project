var express = require('express');
    User = require('../models/User');
    Post = require('../models/Post');
    Comment = require('../models/Comment');
var router = express.Router();

//게시판 작성시 로그인 여부를 알아보기위한 함수
function needAuth(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.flash('danger', '로그인이 필요합니다.');
      res.redirect('/posts/start');
    }
}


router.get('/start', function(req, res, next) {
  var page = req.query.page || 1;
  page = parseInt(page, 10);
  var perPage = 10;
  Post.count(function(err, count) {
    Post.find({}).sort({createdAt: -1})
    .skip((page-1)*perPage).limit(perPage)
    .exec(function(err, posts) {
      if (err) {
        return next(err);
      }
      res.render('posts/index', {
        posts: posts,
        pagination: pagination(count, page, perPage, function(p) {
          return '/posts/start?page=' + p;
        })
      });
    });
  });
});

router.get('/new',needAuth, function(req,res,next){
  res.render('posts/new');
});

router.post('/save', function(req, res, next) {
  var post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log('1');
  post.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/posts/start');
  });
  console.log('post');

});

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
    numPosts: count,
    firstPage: {cls: (page === 1) ? 'disabled' : '', url: funcUrl(1)},
    prevPage: {cls: (page === 1) ? 'disabled' : '', url: funcUrl(prevPage)},
    nextPage: {cls: (page === lastPage) ? 'disabled' : '', url: funcUrl(nextPage)},
    lastPage: {cls: (page === lastPage) ? 'disabled' : '', url: funcUrl(lastPage)},
    pages: pages
  };
}


module.exports = router;
