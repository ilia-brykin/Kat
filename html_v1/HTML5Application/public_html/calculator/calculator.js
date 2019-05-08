var globalResult = document.querySelector('#result');
var globalNumber = "";
console.log("globalResult", globalResult);


function onButtonsNumber(number) {
  globalNumber += number;
  globalResult.innerText = globalNumber;
}

function onButtonsSymbol(number) {
    var number2 = "";
    number2 += number;
    globalResult.innerText = number2;
    
    if ('+') {
      globalNumber += number2; 
    }
    else if ('-') {
      globalNumber -= number2; 
    }
    else if ('*') {
      globalNumber *= number2; 
    }
    else if ('/') {
      globalNumber /= number2; 
    }
    else if ('=') {
    }
}