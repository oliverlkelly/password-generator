//Password Object
const passwordContainer = {
  hasLowerCharacters: false,
  hasUpperCharacters: false,
  hasNumCharacters: false,
  hasSymbolCharacters: false,
  passwordLength: 0,
  password: []
}

// Random Number generator
function randNum(i) {
  return Math.floor(Math.random() * i);
}

// Symbol and Letter arrays
var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
var symbols = Array.from('!@#$%^&*()_-?<>');

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordContainer.password = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Method to check valid length
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
function characterSelection(){
  passwordContainer.hasLowerCharacters = window.confirm("Will the password include Lowercase Letters?");
  passwordContainer.hasUpperCharacters = window.confirm("Will the password include Uppercase Letters?");
  passwordContainer.hasNumCharacters = window.confirm("Will the password include Numbers?");
  passwordContainer.hasSymbolCharacters = window.confirm("Will the password include Symbols?");
  checkCharacterSelection();
}
function checkCharacterSelection(){
  if(passwordContainer.hasNumCharacters !== true && passwordContainer.hasUpperCharacters !== true && passwordContainer.hasLowerCharacters !== true && passwordContainer.hasSymbolCharacters !== true){
    window.confirm("You must select at least one character type.");
    characterSelection();
  }
  else{
    return;
  }
}
function reqCharacterCreation(){
  if(passwordContainer.hasLowerCharacters){
    passwordContainer.password.push(alphabet[randNum(alphabet.length)]);
  }
  if(passwordContainer.hasUpperCharacters){
    passwordContainer.password.push((alphabet[randNum(alphabet.length)]).toUpperCase());
  }
  if(passwordContainer.hasNumCharacters){
    passwordContainer.password.push(randNum(10));
  }
  if(passwordContainer.hasSymbolCharacters){
    passwordContainer.password.push(symbols[randNum(symbols.length)]);
  }
}
function caseSelector(){
  var tfArray = [];
  if(passwordContainer.hasLowerCharacters){
    tfArray.push("1");
  }
  else{
    tfArray.push("0")
  }
  if(passwordContainer.hasUpperCharacters){
    tfArray.push("1");
  }
  else{
    tfArray.push("0")
  }
  if(passwordContainer.hasNumCharacters){
    tfArray.push("1");
  }
  else{
    tfArray.push("0")
  }
  if(passwordContainer.hasSymbolCharacters){
    tfArray.push("1");
  }
  else{
    tfArray.push("0")
  }
  switch(tfArray.join("")){
    case "0001":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(3);
      }
      break;
    case "0010":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(2);
      }
      break;
    case "0011":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(2) + 2);
      }
      break;
    case "0100":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(1);
      }
      break;
    case "0101":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        var x = randNum(2) + 2;
        if(x == 2){
          x = 1;
        }
        fillPasswordCharType(x);
      }
      break;
    case "0110":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(2) + 1);
      }
      break;
    case "0111":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(3) + 1);
      }
      break;
    case "1000":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(0);
      }
      break;
    case "1001":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(2) * 3);
      }
      break;
    case "1010":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(2) * 2);
      }
      break;
    case "1011":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        var x = randNum(3) + 1;
        if(x == 1){
          x = 0;
        }
        fillPasswordCharType(x);
      }
      break;
    case "1100":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(2));
      }
      break;
    case "1101":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        var x = randNum(3) + 1;
        if(x == 2){
          x = 0;
        }
        fillPasswordCharType(x);
      }
      break;
    case "1110":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(3));
      }
      break;
    case "1111":
      while(passwordContainer.password.length < passwordContainer.passwordLength){
        fillPasswordCharType(randNum(4));
      }
      break;
  }
}
function fillPasswordCharType(i){
  if(i === 0){
    passwordContainer.password.push(alphabet[randNum(alphabet.length)]);
  }
  else if(i === 1){
    passwordContainer.password.push((alphabet[randNum(alphabet.length)]).toUpperCase());
  }
  else if(i === 2){
    passwordContainer.password.push(randNum(10));
  }
  else if(i === 3){
    passwordContainer.password.push(symbols[randNum(symbols.length)]);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var tempLength = window.prompt("Please enter desired password length (between 8 and 128):");
  passwordContainer.passwordLength = checkValidLength(tempLength);
  characterSelection();
  reqCharacterCreation();
  caseSelector();
  return passwordContainer.password.join("");

}




