var express = require('express');
var app= express();

//states variables
var connections = [];
var title = "Title Passed";
var timeStamp = new Date();
var presentation = "";
var currentPage = 0;


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
    socket.emit('welcome',{title:title,presentation:presentation,pageIndex:currentPage});
    console.log(connections.length);

    //page change
    socket.on("pageChange", (page)=>{
        currentPage = page;
        console.log("page:" + page);
        socket.broadcast.emit("currentPage",page)
    });

});

console.log('listening...');