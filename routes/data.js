/**
 * Created by jeremycloutier on 1/7/16.
 */
var express = require('express');
var account = require('../modules/account');

var router = express.Router();

router.use(function timeLog(request, response, next){
    console.log("Time: ", Date.now());
    next();
});

router.get('/data', function(request, response){
    var returnResponse = account.myOutput() + account.dollarString();
    response.send(returnResponse);
});

module.exports = router;