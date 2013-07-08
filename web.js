#!/usr/bin/env node

var express = require('express');

var fs = require('fs');
var input_file = "index.html";
var data = new Buffer(256);

data = fs.readFileSync(input_file);



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});