/**
 * Created by jeremycloutier on 1/7/16.
 */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response){
    console.log('Hit index route');
    response.sendFile(path.join(__dirname, '../static/views/index.html'));
});

module.exports = router;