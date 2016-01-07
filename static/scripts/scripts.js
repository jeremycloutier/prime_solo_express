$(function(){
    $('.display').on('click', function(){
        console.log('clicked');
        $.ajax('/getData').then(function(myOutput){
            $(".showBalance").append("<p>" + myOutput + "</p>");
        });
    });
});