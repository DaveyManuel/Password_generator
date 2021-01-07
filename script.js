// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",",",".","<",">","/","?",";",":","'"]

// create empty array for potential characters
var potentialPassword = []
var randomCharUpper = []
var randomCharLower = []
var randomCharNumber = []
var randomCharSpecial = []

//Maybe use charAt() method to find random character in an index instead of individualizing each letter in array? example: it would find random character in this string [abcdefghijklmnop]


// Example of how to use Math random to get random char in array

console.log(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);

console.log(lowercase[Math.floor(Math.random()*lowercase.length)]);

console.log(uppercase[Math.floor(Math.random()*uppercase.length)]);

console.log(numbers[Math.floor(Math.random()*numbers.length)]);


// create function for math random

/*function randomIndexArray(arr){

  var randomIndex = Math.floor(Math.random()*arr.length);
  var characterRandom = arr[randomIndex];

  return characterRandom;

}
*/


function generatePassword(){

    var characterLength = prompt("How many characters would you like in your password? (Choose between 8 and 128)");
    var characterLengthNumber = parseInt(characterLength);



   // potentialPassword.push(randomIndexArray(uppercase));
   

  
  /*Create for-loop based on number of characters from prompt? Then include upperacse,lowercase,numbers, and specialchars in loop using + ?
*/

        for (var i = 0; i < characterLengthNumber; i++) {

          
      
           // (somehow get the random output of these to add to password)
            
           // uppercase + lowercase + numbers + specialCharacters

          //  (Loop i times depending on how many chars user wants in PW)


            //potentialPassword = characterLengthNumber(uppercaseConf + lowercaseConf + numbersConf + specialCharactersConf)



                  }

  
    var uppercaseConf = confirm("Would you like to add any uppercase?");


      if (uppercaseConf){
  
        //If yes add to password
        randomCharUpper = [uppercase[Math.floor(Math.random()*uppercase.length)]];
        //potentialPassword.push(uppercaseConf);
  
  
  
      } else {
  
        // do not add uppercase to PW
  
      }
  
    var lowercaseConf = confirm("Would you like to add any lowercase?");
      if (lowercaseConf){
  
       //If yes add to password
       randomCharLower = [lowercase[Math.floor(Math.random()*lowercase.length)]];
  
      } else {
  
        // do not add lowercase to PW
  
      }
  
    var numbersConf = confirm("Would you like to add any numbers?");
      if (numbersConf){
  
        //If yes add to password
        randomCharNumber = [numbers[Math.floor(Math.random()*numbers.length)]];
  
      } else {
  
  
        // do not add numbers to PW
  
      }
  
    var specialCharactersConf = confirm("Would you like to add any special characters?");
      if (specialCharactersConf){
  
         //If yes add to password
         randomCharSpecial = [specialCharacters[Math.floor(Math.random()*specialCharacters.length)]];
  
      } else {
  
        //do not add special chars to PW
      
  
      }

      potentialPassword = randomCharUpper.concat(randomCharLower, randomCharNumber, randomCharSpecial);

      console.log(randomCharUpper);
      console.log(randomCharLower);
      console.log(randomCharNumber);
      console.log(randomCharSpecial);

      console.log(potentialPassword);
      
                }




// Write password to the #password input
function writePassword() {


var password = generatePassword(); //???? created generatePassword function

var passwordText = document.querySelector("#password");
              
                
              
passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);