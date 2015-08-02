$(document).ready(function () {

function fizzExecutor(userInput){
 for (var i=userInput;i<100;i++){
    var outcome='';
    if (i%3===0) {outcome+='Fizz ';}
     if (i%5===0) {outcome+='Buzz';}
    else if (i%3!==0 && i%5!==0) {outcome=i;}
   cprint(outcome);
 }

        }
  
function askForNumber(){
var input=Number(prompt("Provide a number between 1 and 100")); 
if (input!==input) {alert("this is a string! Provide a number between 1 and 100");
askForNumber();
}
else if (input%1!=0){alert("Provide a number between 1 and 100, make sure it is an integer");
askForNumber();}
else {fizzExecutor(input);}
}


function Printer() {
 var lineCount = 1;

  this.printLine = function(m) {
    var message = lineCount + ': ' + m;

    var n = document.createElement("pre"),    // create a new 'pre' element
        t = document.createTextNode(message); // create a text node to hold our message

    n.appendChild(t); // append your text to the pre element
    document.getElementById("console").appendChild(n); // append your element to the #console element

    lineCount++;
  }
}

// create both printers
var consolePrinter = new Printer("console");
var cprint = consolePrinter.printLine;

askForNumber();

 function alternateColor(color, textId, myInterval) {
    if(!myInterval){
        myInterval = 500;    
    }
    var colors = ['brown', 'pink', 'black', 'blue', 'green', 'magenta', 'cyan', 'crimson','navy', 'orange', color];
    var currentColor = 1;
    document.getElementById(textId).style.color = colors[0];
    setInterval(function() {
        document.getElementById(textId).style.color = colors[currentColor];
        if (currentColor < colors.length-1) {
            ++currentColor;
        } else {
            currentColor = 0;
        }
    }, myInterval);
}
alternateColor('purple','console');

});
