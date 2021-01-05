// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",",",".","<",">","/","?",";",":","'"]

// Example of how to use Math random to get random char in array
console.log(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);

//Maybe use charAt() method to find random character in an index instead of individualizing each letter in array? example: it would find random character in this string [abcdefghijklmnop]

// Write password to the #password input
function writePassword() {

  // Would I need to use parseint() before prompt?
  var characterLength = prompt("How many characters would you like in your password?");

// Create for-loop based on number of characters from prompt? Then include upperacse,lowercase,numbers, and specialchars in loop using + ?

  var uppercaseConf = confirm("Would you like to add any uppercase?");
    if (uppercaseConf){

    }
  var lowercaseConf = confirm("Would you like to add any lowercase?");
    if (lowercaseConf){

    }
  var numbersConf = confirm("Would you like to add any numbers?");
    if (numbersConf){

    }
  var specialCharactersConf = confirm("Would you like to add any special characters?");
    if (specialCharactersConf){

    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



