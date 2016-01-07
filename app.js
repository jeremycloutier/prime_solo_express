var express = require('express');
var path = require('path');
var app = express();

var account = require('./modules/account');

app.use(express.static('static'));

app.get('/', function(request, response){
    var ourPath = path.join(__dirname, 'index.html');
    console.log('ourPath', ourPath);
    response.sendFile(ourPath);
});

app.get('/balance', function(request, response){
    response.send(account.myOutput);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});
