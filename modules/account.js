var rand_numb = require('./rand_numb');
var dollar = require('./dollar');

var randomNum = rand_numb(100, 1000000);

function dollarString(){
    randomNum = rand_numb(100, 1000000);
    return dollar(randomNum);
}

var myOutput = function(){
    return "Account Balance: \n";
};

exports.myOutput = myOutput;
exports.dollarString = dollarString;