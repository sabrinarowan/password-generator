// Assignment code here
// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "?", "~", "`", "@", "#", "$", "%", "^", "&", "*", "(",")", "-", "_", "+", "="];
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var lowerChoices;
var upperChoices;
var numberChoices;
var specialChoices;

// start function 
function generatePassword () {
  // prompt to tell user length to choose
  passwordLength = prompt("Choose between 8 and 128 characters for your password.")
  // loop if answer does not meet criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters!");
    return generatePassword ();
  }

  confirmLower = confirm("Click 'OK' to include lowercase letters. Click 'Cancel' to exclude lowercase letters.");
  confirmUpper = confirm("Click 'OK' to include uppercase letters. Click 'Cancel' to exclude uppercase letters.");
  confirmNumber = confirm("Click 'OK' to include numbers. Click 'Cancel' to exclude numbers.");
  confirmSpecial = confirm("Click 'OK' to include special characters. Click 'Cancel' to exclude special characters.");
  // loop if no criteria is chosen
  while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false) {
    alert("You must include one of the following: A lowercase letter, an uppercase letter, a number, or a special character!");
    confirmLower = confirm("Click 'OK' to include lowercase letters. Click 'Cancel' to exclude lowercase letters.");
    confirmUpper = confirm("Click 'OK' to include uppercase letters. Click 'Cancel' to exclude uppercase letters.");
    confirmNumber = confirm("Click 'OK' to include numbers. Click 'Cancel' to exclude numbers.");
    confirmSpecial = confirm("Click 'OK' to include special characters. Click 'Cancel' to exclude special characters.");
  }

  if (confirmLower) {
    lowerChoices = lowerCase.concat();
  }
  else {
    lowerChoices = "";
  }
  if (confirmUpper) {
    upperChoices = upperCase.concat();
  }
  else {
    upperChoices = "";
  }
  if (confirmNumber) {
    numberChoices = number.concat();
  }
  else {
    numberChoices = "";
  }
  if (confirmSpecial) {
    specialChoices = specialCharacter.concat();
  }
  else {
    specialChoices = "";
  }
  console.log(lowerChoices)
  console.log(upperChoices)
  console.log(numberChoices)
  console.log(specialChoices)

  var passwordChoices = lowerChoices.concat(upperChoices, numberChoices, specialChoices);
  console.log(passwordChoices)

  var randomPassword = [];

  // loop for password variations
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
