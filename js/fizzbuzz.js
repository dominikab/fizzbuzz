$(document).ready(function () {

var input=promt("Provide a number between 1 and 100")

for (var i=1;i<100;i++){

    var outcome='';
    if (i%3===0) {outcome+='Fizz ';}
     if (i%5===0) {outcome+='Buzz';}
    else if (i%3!==0 && i%5!==0) {outcome=i;}
    $(".number").before("The number is: " +outcome+ "<br>");
//console.log("The outcome for : "+i+" is : "+outcome);
}


});