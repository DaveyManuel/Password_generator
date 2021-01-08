// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()_-[]{}+=,./<>?;'`~"

/*
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",",",".","<",">","/","?",";",":","'"]
*/

// create empty array for potential characters
//var randomCharUpper = 0
//var randomCharLower = 0
//var randomCharNumber = 0
//var randomCharSpecial = 0

// create function for math random

/*function randomIndexArray(arr){

  var randomIndex = Math.floor(Math.random()*arr.length);
  var characterRandom = arr[randomIndex];

  return characterRandom;

}
*/



function generatePassword(){


  var characterLength = prompt("How many characters would you like in your password? (Choose between 8 and 128)");
  //var characterLengthNumber = parseInt(characterLength);


  if (characterLength < 8 || characterLength > 128) {

    alert("PASSWORD MUST BE BETWEEN 8 AND 128. PLEASE CLICK BUTTON AGAIN.")
    return;


  } else {

    var characterLengthNumber = parseInt(characterLength);

  }


    var charactersAllowed = ''
    var potentialPassword = ''


// ADD ELSE FOR IF USER SETS <8 or >128

   // potentialPassword.push(randomIndexArray(uppercase));

  
    var uppercaseConf = confirm("Would you like to add any uppercase?");


      if (uppercaseConf){
  

        charactersAllowed += uppercase
        //If yes add to password
        //randomCharUpper = [uppercase[Math.floor(Math.random()*uppercase.length)]];
        //potentialPassword.push(randomCharUpper);
  
  
  // don't need else statements
      } else {
  
        // do not add uppercase to PW
       
  
      }
  
    var lowercaseConf = confirm("Would you like to add any lowercase?");
      if (lowercaseConf){

        charactersAllowed += lowercase

  
       //If yes add to password
       //randomCharLower = [lowercase[Math.floor(Math.random()*lowercase.length)]];
  
      } else {
  
        // do not add lowercase to PW
  
      }
  
    var numbersConf = confirm("Would you like to add any numbers?");
      if (numbersConf){

        charactersAllowed += numbers

  
        //If yes add to password
        //randomCharNumber = [numbers[Math.floor(Math.random()*numbers.length)]];
  
      } else {
  
  
        // do not add numbers to PW
  
      }
  
    var specialCharactersConf = confirm("Would you like to add any special characters?");
      if (specialCharactersConf){

        charactersAllowed += specialCharacters

  
         //If yes add to password
         //randomCharSpecial = [specialCharacters[Math.floor(Math.random()*specialCharacters.length)]];
  
      } else {
  
        //do not add special chars to PW
      
  
      }

      console.log(charactersAllowed)

      //potentialPassword = randomCharUpper.concat(randomCharLower, randomCharNumber, randomCharSpecial);

     // console.log(randomCharUpper);
      //console.log(randomCharLower);
      //console.log(randomCharNumber);
      //console.log(randomCharSpecial);

      //console.log(potentialPassword);

      //get characters out of array and into password somehow


        /*Create for-loop based on number of characters from prompt? Then include upperacse,lowercase,numbers, and specialchars in loop using + ?
*/

for (var i = 0; i < characterLengthNumber; i++) {

  var randomNumberSelector = Math.floor(Math.random()*charactersAllowed.length);

  potentialPassword += charactersAllowed[randomNumberSelector];
      //potentialPassword=randomCharUpper + randomCharLower + randomCharNumber + randomCharSpecial

  // (somehow get the random output of these to add to password)

 //  (Loop i times depending on how many chars user wants in PW)


         }


      console.log(randomNumberSelector)
      console.log(potentialPassword)

      return potentialPassword;

                }




// Write password to the #password input
function writePassword() {


var password = generatePassword(); //???? created generatePassword function

var passwordText = document.querySelector("#password");
              
                
              
passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);