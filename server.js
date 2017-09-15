var express = require('express');
var app= express();

app.use(express.static('./build'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


console.log('listening...');