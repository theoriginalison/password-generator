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
function generatePassword() {
  //need variables of choices, variables that include the entire array of possible options

  // OR var inputLength = Array(100).fill().map(function(v, i) { return i + 1; }); these are used to generate the password:
  var inputLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var inputUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var inputNumber = "0123456789".split("");
  // Q: which characters are considered special characters? Is there a specified #?
  var inputSpecial = "!@#$%^&*_-?~+".split("");
  var possiblePwds = {};

  console.log(inputLowercase);
  console.log(inputUppercase);
  console.log(inputNumber);
  console.log(inputSpecial);

  var newPassword = "";

  //button click needs to initiate first alert

  var pwdLength = prompt("How long should your password be?");
  var yesLowercase = confirm("Would you like to include lowercase letters?");
  var yesUppercase = confirm("Would you like to include uppercase letters?");
  var yesNumbers = confirm("Would you like to include numbers?");
  var yesSpecial = confirm("Would you like to include special characters?");

  //for every "ok," need to use at least one character type-- bonus would be how many

  if (yesLowercase) {
    possiblePwds.lower = inputLowercase;
  }
  if (yesUppercase) {
    possiblePwds.upper = inputUppercase;
  }
  if (yesNumbers) {
    possiblePwds.numbers = inputNumber;
  }
  if (yesSpecial) {
    possiblePwds.special = inputSpecial;
  }
  //NEXT: Loop through and guarantee one of each character
  //repeats lower upper number special in a loop until it reaches pwdLength-- but also depends on what the user selects as wanting to be in; build one four-character pwd bc that also depends on what types of characters the user chooses
  // how to make sure it includes at least one of each kind a "yes" is
  // how to determine a length
  console.log(possiblePwds);
  //for loop for length of password since prompt already gives a number
  for (var i = 1; i <= 129; i++) {
    numbers.push(i);
  }
}
