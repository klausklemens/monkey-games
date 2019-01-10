var express = require('express');
var router = express.Router();

/* GET game */
router.get('/', function(req, res) {
    res.render('gamesList', { title: 'Games' });
});

router.get('/:name', function(req, res) {
    res.render('gamesList', { title: 'Games', errorMsg:'game doesn\'t exist!' });
});

module.exports = router;
