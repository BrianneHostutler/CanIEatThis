var express = require('express');
var path = require('path');
var router = express.Router();
var uuid = require('node-uuid')
var request = require('request');

var app = express();
var createUUID = uuid.v4();

router.get('/', function (req, res) {

  console.log(req.session )
    res.render('index', {checkSession: req.session});
});

router.get('/searchResults', function(req, res) {

var upc = req.query.upccode;
console.log(upc);
  request('http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u='+upc, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.render('searchResults', {search: JSON.parse(body), checkSession: req.session});

      // console.log(body);
    }
  })
});

  router.get('/upc/:upccode', function(req, res, next) {
  //curl "http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u=028400071932"

  request('http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u='+req.params.upccode, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
      console.log(body);
    }
  })
});


module.exports = router;
