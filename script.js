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

  var possibleCharacters = [];
  var password = "";
  if (userInput.lower) {
    possibleCharacters.push(inputLowercase);
  }
  if (userInput.upper) {
    possibleCharacters.push(inputUppercase);
  }
  if (userInput.numbers) {
    possibleCharacters.push(inputNumber);
  }
  if (userInput.special) {
    possibleCharacters.push(inputSpecial);
  }

  for (var i = 0; i < userInput.length; i++) {
    if (i <= possibleCharacters.length - 1) {
      var charTypeArr = possibleCharacters[i];
      var randChoice =
        charTypeArr[Math.floor(Math.random() * charTypeArr.length)];

      password += randChoice;
    } else {
      var randTypeArr =
        possibleCharacters[
          Math.floor(Math.random() * possibleCharacters.length)
        ];

      console.log(randTypeArr);
      var randChoice =
        randTypeArr[Math.floor(Math.random() * randTypeArr.length)];
      console.log(randChoice);
      password += randChoice;
    }
  }

  return password;
}

//something needs to go here so the guaranteedCharacters are printed in the box-- it is the #password in the HTML

generateBtn.addEventListener("click", writePassword);
