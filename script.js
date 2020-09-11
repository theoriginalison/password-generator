// Object.onclick = function (){};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need variables of choices

var inputLength = 8;
// OR var inputLength = Array(100).fill().map(function(v, i) { return i + 1; })
var inputLowercase = //need range
var inputUppercase = //need range
var inputNumber = //need range
var inputSpecial

var inputLength = [];
for (var i = 1; i <= 129; i++) {
  numbers.push(i);
}

//button click needs to initiate first alert

var pwdLength = prompt("How long should your password be?");
var yesLowercase = confirm("Would you like to include lowercase letters?");
var yesUppercase = confirm("Would you like to include uppercase letters?");
var yesNumbers = confirm("Would you like to include numbers?");
var yesSpecial = confirm("Would you like to include special characters?");

//for every "ok," need to use at least one character type-- bonus would be how many

if inputLength //is less than 8 and greater than 128, reprompt, maybe w alert that says "please enter a number between 8-128"

else //include at least one of whatever is chosen?
