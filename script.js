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

//button click needs to initiate first alert

var pwdLength = prompt("How long should your password be?");
var yesLowercase = confirm("Would you like to include lowercase letters?");
var yesUppercase = confirm("Would you like to include uppercase letters?");
var yesNumbers = confirm("Would you like to include numbers?");
var yesSpecial = confirm("Would you like to include special characters?");

//for every "ok," need to use at least one character type-- bonus would be how many
