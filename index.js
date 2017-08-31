var app = require('express')();
var http = require('http').createServer(app);

app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/build/index.html');
});


http.listen(3000,()=>{
    console.log('started');
});