var express = require('express');
var path = require('path');
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
    res.render('index')
});

router.get('/other', function (req, res) {
    
});

module.exports = router;