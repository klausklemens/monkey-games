var express = require('express');
var router = express.Router();

/* GET game */
router.get('/:name', function(req, res, next) {
    res.render('index', { title: 'Express', name: req.session.name });
});

module.exports = router;
