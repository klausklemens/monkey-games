var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: req.session.name });
});

router.get('/setName', function(req, res, next) {
  req.session.name = req.query.value;
  res.redirect('/');
});

router.get('/destroy', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
