var express = require('express');
var app= express();

//states variables
var connections = [];
var title = "";
var timeStamp = new Date();
var presentation = "";
var currentPage = 1;


//
app.use(express.static('./build'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


io.sockets.on('connection',function(socket){
    //user disconnected
    socket.once('disconnect',()=>{
        connections.splice(connections.indexOf(socket),1);
        console.log(connections.length);
        io.emit('peerchanged',connections.length);
    });

    //user conection
    connections.push(socket);
    io.emit('peerchanged',connections.length);
    console.log(connections.length);

    //page change
    socket.on("pageChange", (page)=>{
        currentPage = page;
        console.log("page:" + page);
        io.emit("updatePage",currentPage)
    });

    //previous page

    //page change

});

console.log('listening...');