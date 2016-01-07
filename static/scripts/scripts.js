$(function(){
    $(".display").on('click', function(){
        console.log('clicked');
        $.ajax('/get/data').then(function(myOutput){
            $(".showBalance").append("<p>" + myOutput + "</p>");
        });
    });
});