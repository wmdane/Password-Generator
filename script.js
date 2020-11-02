// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {

    var userLength = parseInt(prompt("How long should your password be? (Password must be between 8 - 128 characters)"));
        if (userLength < 8 || userLength > 128) {
            alert("Password must be 8-128 characters long!")
            var userLength = parseInt(prompt("How long should your password be? (Password must be between 8 - 128 characters)"));
        }
    var userLower = confirm("Should your password include lower case letters?");
    var userUpper = confirm("Should your password contain uper case letters?");
    var userNumbers = confirm("Should your password contain numbers?");
    var userSpecial = confirm("Should your password contain special characters (i.e. ?, !, etc.)?");

    //Tried changing this to a self-referencial while loop based on office hours conversation, but it broke the return password on line 55 and I'm not sure why
    if ((userLower !== true) && (userUpper !== true) && (userNumbers !== true) && (userSpecial !== true)) {
        alert("Please confirm at least one character set.")
        generatePassword()
    }

    var charSet = []
    //Note to self: else if statements here make them mutually exclusive. It will always pick only one true statement.
    if (userLower === true) {
        charSet = charSet.concat(lower)
    }
    if (userUpper === true) {
        charSet = charSet.concat(upper)
    }
    if (userNumbers === true) {
        charSet = charSet.concat(numbers)
    }
    if (userSpecial === true) {
        charSet = charSet.concat(special)
    }
    console.log(charSet)

    // ensures the password comes out as a string. Without the "", the first character will say 'undefined' or 'NaN'
    var password = "";

    //
    for (var i = 0; i < userLength; i++) {
        var password = password + charSet[Math.floor(Math.random() * charSet.length)];
        console.log(password)
    }
    //return needs to be outside the for loop otherwise it will only output a single character at the end of the loop's run.
    return password.concat();

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);