$(document).ready(function () {

var fizzExecutor = function (userInput){
for (var i=userInput;i<100;i++){
    var outcome='';
    if (i%3===0) {outcome+='Fizz ';}
     if (i%5===0) {outcome+='Buzz';}
    else if (i%3!==0 && i%5!==0) {outcome=i;}
    $(".number").before("The number is: " +outcome+ "<br>");
    							}
	}


var askForNumber = function(){
var input=Number(prompt("Provide a number between 1 and 100"));	
if (input!==input) {alert("this is a string! Provide a number between 1 and 100");
askForNumber();
}
else if (input%1!=0){alert("Provide a number between 1 and 100, make sure it is an integer");
askForNumber();}
else {fizzExecutor(input);}
}

askForNumber();

});



function Printer(divId) {
  var lineCount = 1;
  
  this.printLine = function() {
    var m = lineCount + ': ';
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }

    var n = document.createElement("pre"),
        t = document.createTextNode(m);

    n.appendChild(t);
    document.getElementById(divId).appendChild(n);
    
    lineCount++;
  }
}
