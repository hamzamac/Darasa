var app = require('express')();
var http = require('http').createServer(app);

app.get('/',(req, res)=>{
    res.send('<p>Hello Darasa</p>');
});


http.listen(3000,()=>{
    console.log('started');
});