var express = require('express');
var app= express();
var connections = [];

app.use(express.static('./build'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


io.sockets.on('connection',function(socket){
    socket.once('disconnect',()=>{
        connections.splice(connections.indexOf(socket),1);
        console.log(connections.length);
        io.emit('peerchanged',connections.length);
    });
    connections.push(socket);
    io.emit('peerchanged',connections.length);
    console.log(connections.length);
});

console.log('listening...');