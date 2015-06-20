var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require("request");
var base64Stream = require("base64-stream");

function imageRoute() {
  var image = new express.Router();
  image.use(cors());
  image.use(bodyParser());

  image.all('/', function(req, res) {
    var url = req.query.url || req.body.url;
    var base64 = req.query.base64 || req.body.base64;

    console.log('url = ', url);
    console.log('base64 = ', base64);

    if( base64 == "true") {
      console.log('Doing Base64 stream');
      request(url).pipe(base64Stream.encode()).pipe(res);
    } else {
      console.log('Doing binary stream');
      request(url).pipe(res);
    }
  });

  return image;
}

module.exports = imageRoute;
