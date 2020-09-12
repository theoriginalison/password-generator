var inputLowercase = "abcdefghijklmnopqrstuvwxyz".split(""); //move to global variables
var inputUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var inputNumber = "0123456789".split("");
var inputSpecial = "!@#$%^&*_-?~+".split("");
var possiblePwds = {}; //this is the object?

// Object.onclick = function (){};

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
  //need variables of choices, variables that include the entire array of possible options
  var userInput = userInputFunction();
  console.log(userInput);
  // OR var inputLength = Array(100).fill().map(function(v, i) { return i + 1; }); these are used to generate the password:

  var newPassword = "";

  //button click needs to initiate first alert

  //for every "ok," need to use at least one character type-- bonus would be how many
  //don't need an object-- just look at the values of yesUpper and yesLower, pull the if statement inside the for loop and conditionally choose one of them

  //NEXT: Loop through and guarantee one of each character
  //repeats lower upper number special in a loop until it reaches pwdLength-- but also depends on what the user selects as wanting to be in; build one four-character pwd bc that also depends on what types of characters the user chooses
  // how to make sure it includes at least one of each kind a "yes" is
  // how to determine a length
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

  // for (var i = 1; i < pwdLength; i++) {
  //   numbers.push(i); //idk what this is
  //   if (i === pwdLength - 4) break;

  //   if (yesLowercase) {
  //     possiblePwds.lower = inputLowercase;
  //     //need to add

  //     selLowercase =
  //       possiblePwds[Math.floor(Math.random() * inputLowercase.length)];
  //   } else yesLowercase.null; //doesn't run

  //   if (yesUppercase) {
  //     possiblePwds.upper = inputUppercase;
  //   }
  //   if (yesNumbers) {
  //     possiblePwds.numbers = inputNumber;
  //   }
  //   if (yesSpecial) {
  //     possiblePwds.special = inputSpecial;
  //   }
  // }
}

generateBtn.addEventListener("click", writePassword);
