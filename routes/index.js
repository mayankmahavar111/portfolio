var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.set('Cache-control', 'public, max-age=300');
  res.render('index', { title: 'Portfolio' });
});

router.get('/' , function(req, res, next){
  res.redirect('/blog');
})


router.get('/' , function(req, res, next){
  res.set('Cache-control', 'public, max-age=300');
  res.render('error');
})


module.exports = router;
