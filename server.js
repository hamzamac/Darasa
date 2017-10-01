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
    //on socket disconnected
    socket.once('disconnect',()=>{
        connections.splice(connections.indexOf(socket),1);
        console.log(connections.length);
        io.emit('peerchanged',connections.length);
    });

    //on socket conection
    connections.push(socket); //and to socket array
    io.emit('peerchanged',connections.length); //pubish to all that new user counter
    socket.emit('welcome',{title:title,presentation:presentation,pageIndex:currentPage}); //provide the connection with states information
    console.log(connections.length);

    //on page change
    socket.on("pageChange", (page)=>{
        currentPage = page;
        console.log("page:" + page);
        socket.broadcast.emit("currentPage",page); //tell others on this socket page action
    });

});

console.log('listening...');