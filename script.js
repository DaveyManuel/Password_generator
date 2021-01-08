// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()_-[]{}+=,./<>?;'`~"


function generatePassword(){


  var characterLength = prompt("How many characters would you like in your password? (Choose between 8 and 128)");
  var charactersAllowed = ''
  var potentialPassword = ''
  var uppercaseConf = confirm("Would you like to add any uppercase?");
  var lowercaseConf = confirm("Would you like to add any lowercase?");
  var numbersConf = confirm("Would you like to add any numbers?");
  var specialCharactersConf = confirm("Would you like to add any special characters?");




  if (characterLength < 8 || characterLength > 128) {

    alert("Password must be between 8 and 128 characters. Please click button again.")
    return;


  } else {

    var characterLengthNumber = parseInt(characterLength);

  }

  if (uppercaseConf){
  

        charactersAllowed += uppercase

      } 
  
  if (lowercaseConf){

        charactersAllowed += lowercase

      } 
  
  if (numbersConf){

        charactersAllowed += numbers
  
      } 
  
  if (specialCharactersConf){

        charactersAllowed += specialCharacters
  
      } 

  if (!uppercaseConf && !lowercaseConf && !numbersConf && !specialCharactersConf){

    alert ("Please select at least one criteria.")
    return;

  }

      console.log(charactersAllowed)

for (var i = 0; i < characterLengthNumber; i++) {

  var randomNumberSelector = Math.floor(Math.random()*charactersAllowed.length);

  potentialPassword += charactersAllowed[randomNumberSelector];

         }


      console.log(randomNumberSelector)
      console.log(potentialPassword)

      return potentialPassword;

                }




// Write password to the #password input
function writePassword() {


var password = generatePassword(); 

var passwordText = document.querySelector("#password");
                     
passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);