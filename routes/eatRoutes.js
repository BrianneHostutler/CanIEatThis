var express = require('express');
var path = require('path');
var router = express.Router();
var uuid = require('node-uuid')

var app = express();
var createUUID = uuid.v4();

router.get('/', function (req, res) {
    res.render('index')
});

router.get('/other', function (req, res) {

});

router.get('/searchResults', function(req, res) {

  res.render('searchResults');
});

router.get('/sesh', function(req, res) {

  res.json(createUUID);
});

module.exports = router;
