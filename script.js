// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberArray = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacterArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",",",".","<",">","/","?",";",":","'"]


// Write password to the #password input
function writePassword() {
  var uppercase = confirm("Would you like to add any uppercase?");
    if (uppercase){

    }
  var lowercase = confirm("Would you like to add any lowercase?");
    if (lowercase){

    }
  var numbers = confirm("Would you like to add any numbers?");
    if (numbers){

    }
  var specialCharacters = confirm("Would you like to add any special characters?");
    if (specialCharacters){

    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



