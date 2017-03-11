'use strict';

var app = require('express')();
var express = require('express');

var portno = 8888;   //local version

var app = express();

//express static module (http://expressjs.com/en/starter/static-files.html)
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });

var server = app.listen(portno, function () {
  var port = server.address().port;
});

