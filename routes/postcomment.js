var express = require('express');
    Post = require('../models/Post');
    Comment = require('../models/Comment');
var router = express.Router();

router.get('/:id',function (req,res,next) {
  Post.findById(req.params.id,function(err,post){
  if(err){
    return next(err);
  }
  Comment.find({post: post.id}, function(err, comments) {
        if (err) {
          return next(err);
        }
        res.render('posts/show', {post: post, comments: comments});
      });
  });
});


router.post('/:id/comments', function(req, res, next) {
  var comment = new Comment({
    post: req.params.id,
    email: req.body.email,
    content: req.body.content
  });

  comment.save(function(err) {
    if (err) {
      return next(err);
    }
    Post.findByIdAndUpdate(req.params.id, {$inc: {numComment: 1}}, function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/postcomment/' + req.params.id);
    });
  });
});


module.exports = router;
