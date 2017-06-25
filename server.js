
var express = require('express');
var react = require('react');

var app = express();
var port = process.env.PORT || 3001;

app.listen(port);
console.log('http://localhost' + port);
