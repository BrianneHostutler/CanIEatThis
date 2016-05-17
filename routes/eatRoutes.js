var express = require('express');
var path = require('path');
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
    res.render('index', {Sample_Test: '<h1 style="color:green">POWER PUFF FTW </hi>'})
});

router.get('/other', function (req, res) {
    res.render('myotherpage', {Sample_Test: 'something'});
});

module.exports = router;