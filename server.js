var express = require('express');
var path = require('path');
var index = require('./routes/index');
var dataRouter = require('./routes/data');

var app = express();

app.use(express.static('static'));
app.use('/', index);
app.use('/get', dataRouter);

//app.get('/', function(request, response){
//    response.sendFile(path.join(__dirname, 'static/views/index.html'));
//});

//app.get('/getData', function(request, response){
//    var returnResponse = balance.myOutput();
//    response.send(returnResponse);
//});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});