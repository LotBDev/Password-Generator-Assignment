// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characterType = prompt("Choose your password's character type (uppercase, lowercase, numeric, or special)").split["uppercase","lowercase","numeric","special"];  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericChar = ["1","2","3","4","5","6","7","8","9","0"];
  var specialChar = [" ","!","@","#","$","%","^","&","*","(",")","-","_","+","`","~",":",";","'","|","<",">",",",".","?"];
  if (characterType = "uppercase") { const random = Math.floor(Math.random() * upperCase.length);
    console.log(random, upperCase[random]);
   };
  if (characterType = "lowercase") { const random = Math.floor(Math.random() * lowerCase.length);
    console.log(random, lowerCase[random]);
   };
  if (characterType = "numeric") { const random = Math.floor(Math.random() * numericChar.length);
    console.log(random, numericChar[random]);
   };
  if (characterType = "special") { const random = Math.floor(Math.random() * specialChar.length);
    console.log(random, specialChar[random]);
   };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password; 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get the input field
var input = document.getElementById("myInput");
var el_down = document.getElementById("#password"); 