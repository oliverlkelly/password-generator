// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function checkValidLength(templength){
  var length = parseInt(templength);
  if(length >= 8 && length <= 128 && isNaN(length) !== true){
      return length;
  }
  else{
    length = parseInt(window.prompt("That is not a valid value. Please enter desired password length (between 8 and 128):"));
    checkValidLength(length);
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Random Number generator
function randNum() {
  return Math.floor(Math.random() * 10);
}

// Symbol and Letter arrays
var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
var symbols = Array.from('!@#$%^&*()_-?<>');

// Usage variables for final pass
var numCharacters = [];
var lowerCharacters = [];
var upperCharacters = [];
var symbolCharacters = [];
var passwordLength;
var password = [];

function generatePassword(){
  var tempLength = window.prompt("Please enter desired password length (between 8 and 128):");
  passwordLength = checkValidLength(tempLength);
}




