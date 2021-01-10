# Password_generator

## User Story

In this password generator website, I have made it so that when a user clicks on the generate password button, they are given a password with random letters, numbers, and special characters. This password has been programmed to be dependent on the amount of characters given by the user when prompted. The password is also dependent on if the user confirms if they want uppercase letters, lowercase letters, numbers, and/or special characters. 

## Logic used

To start the assignment, I declared 4 global variables that would hold the potential characters (uppercase, lowercase, numbers, specialCharacters) to be inputed into the eventual password. Inside my generatePassword function I declared 2 empty variables that would store potential characters depending on user input. For my charactersAllowed variable I made it so that all the possible characters would be stored in one variable that would then be accessed and used for the empty potentialPassword variable. 

I created 4 "if" statements that would act as criteria for the charactersAllowed variable; if the user wanted to add said characters, then they would be added to charactersAllowed.

I then declared confirmation variables which confirmed the kinds of characters to include, and I also declared a variable for a prompt which asked the user how many characters they wanted in their password. If character length was between 8 and 128, a variable was created to store the number chosen which was then converted to an integer using parseInt to be used later within the function. 

Next, I created a for loop in generate our password. The implementation of a for loop based on the characterLengthNumber was necessary so that the final password would have the correct amount of characters. By using Math.floor(Math.random()*charactersAllowed.length) I was able to create a number that could be used within brackets to access the index of the newly created characterAllowed array variable.

Lastly, 2 variables are declared in the last function writePassword. The variable password is set to call the function generatePassword which returns potentialPassword. The passwordText variable is set equal to the text area where the final password will show using document.querySelector. Finally, I used the .value function to grab the value of the password given to us using the generatePassword function. by setting passwordText.value = password. 