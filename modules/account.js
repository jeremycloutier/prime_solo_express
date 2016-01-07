var rand_numb = require('./rand_numb');
var dollar = require('./dollar');

var randomNum = rand_numb(100, 1000000);
var dollarString = dollar(randomNum);

var myOutput = function(){
    return "Account Balance: \n" + dollarString;
};

module.exports = myOutput;