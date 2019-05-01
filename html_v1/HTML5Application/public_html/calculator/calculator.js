var globalResult = document.querySelector('#result');
var globalNumber = "";
console.log("globalResult", globalResult);

// div.number = buttonsNumber;
// var buttonsNumber = function (number){
//
// };


function onButtonsNumber(number) {
  globalNumber += number;
  globalResult.innerText = globalNumber;
}