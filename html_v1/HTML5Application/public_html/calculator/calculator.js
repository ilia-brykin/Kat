var globalResult = document.querySelector('#result');
var globalNumber = "";
console.log("globalResult", globalResult);


function onButtonsSymbol(symbol) {
  globalNumber += symbol;
  globalResult.innerText = globalNumber;
    // var number2 = "";
    // number2 += number;
    // globalResult.innerText = number2;
    //
    // if ('+') {
    //   globalNumber += number2;
    // }
    // else if ('-') {
    //   globalNumber -= number2;
    // }
    // else if ('*') {
    //   globalNumber *= number2;
    // }
    // else if ('/') {
    //   globalNumber /= number2;
    // }
}

function getResult() {
  var tempNumber;
  try {
    tempNumber = eval(globalNumber);
    // код ...

  } catch (error) {
    console.log("error", error);
    // обработка ошибки
    return;
  }
  globalNumber = tempNumber;
  globalResult.innerText = globalNumber;
  console.log("globalNumber", );
}