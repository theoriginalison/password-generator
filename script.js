var inputLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var inputUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var inputNumber = "0123456789".split("");
var inputSpecial = "!@#$%^&*_-?~+".split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function userInputFunction() {
  var pwdLength = prompt(
    "How many characters should your password be? Choose a length between 8 and 128."
  );
  var yesLowercase = confirm("Would you like to include lowercase letters?");
  var yesUppercase = confirm("Would you like to include uppercase letters?");
  var yesNumbers = confirm("Would you like to include numbers?");
  var yesSpecial = confirm("Would you like to include special characters?");
  var confirmChar = {
    length: pwdLength,
    lower: yesLowercase,
    upper: yesUppercase,
    numbers: yesNumbers,
    special: yesSpecial,
  };
  return confirmChar;
}

function generatePassword() {
  var userInput = userInputFunction();
  console.log(userInput);

  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (userInput.lower) {
    possibleCharacters = possibleCharacters.concat(inputLowercase);
  }
  if (userInput.upper) {
    possibleCharacters = possibleCharacters.concat(inputUppercase);
  }
  if (userInput.numbers) {
    possibleCharacters = possibleCharacters.concat(inputNumber);
  }
  if (userInput.special) {
    possibleCharacters = possibleCharacters.concat(inputSpecial);
  }

  for (var i = 0; i < userInput.length; i++) {
    guaranteedCharacters.push(
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    );
  }

  console.log(guaranteedCharacters);
}

//something needs to go here so the guaranteedCharacters are printed in the box-- it is the #password in the HTML

generateBtn.addEventListener("click", writePassword);
