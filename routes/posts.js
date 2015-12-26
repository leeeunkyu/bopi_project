var express = require('express');
    User = require('../models/User');
    Post = require('../models/Post');
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


router.get('/start',function (req,res,next) {
  Post.find({}, function(err, docs) {
  if (err) {
    return next(err);
  }
    res.render('posts/index',{posts:docs});
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
  });
res.redirect('/posts/start');
});



module.exports = router;
