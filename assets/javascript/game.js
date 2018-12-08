

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var winsTotal = 0
var lossesTotal = 0
var attempts = 10
var usedLetters = [];
var userGuess = ""
    // var userGuess = document.onkeyup = function guessWhat(event){
    //     event.key
//computer guess method
var computerGuess = letters[Math.floor(Math.random()* letters.length)];
console.log(computerGuess)


// make an event listener for the user's guess
// document.onkeyup = function user(event) {
// var userGuess = event.key
document.onkeyup = function guessWhat(event){
    event.key;

 guessWhat(); { 
if (userGuess === computerGuess) 
winsTotal++;
attempts = 10;
usedLetters = 0;
} if (userGuess != computerGuess) {
attempts--;
document.getElementById("guessthusfar").push(userGuess);
} if (attempts = 0){
    lossesTotal++;

document.getElementById("wins").innerHTML = "Wins: " + winsTotal
document.getElementbyId("losses").innerHTML = "Losses: " + lossesTotal
document.getElementById("guessthusfar").innerHTML = "Your Guesses So Far: " + usedLetters
userGuess.textContent = "Your Guesses: " + userGuess
}
}

// while (computerGuess.length = 0, function()) {
//     letters[Math.floor(Math.random()* letters.length)];
//     // document.onkeyup (letters[i]);
//     computerGuess.getElementbyId("#Remaining").text(computerGuess);
//     console.log(computerGuess)
// }


// for (var i = 0; i < letters.length; i++){
//     if letters.onkeyup (function() {
//         document.getElementById("Remaining");
//         document.addhtml ("#Remaining" + letters);
//     });
// }