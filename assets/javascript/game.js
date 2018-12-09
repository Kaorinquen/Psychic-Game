

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var winsTotal = 0
var lossesTotal = 0
var attempts = 9
var usedLetters = [];
var computerGuess = [];
    // var userGuess = document.onkeyup = function guessWhat(event){
    //     event.key
//computer guess method
 function() {
    var compGuessVar = letters[Math.floor(Math.random()* letters.length)];
computerGuess.push(compGuessVar);
console.log(computerGuess[0])
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    usedLetters.push(userGuess);
    

if ((userGuess === computerGuess[0]) && (attempts > 0)) {
winsTotal++;
attempts = 9;
usedLetters.length = 0;
computerGuess.length = 0;
var compGuessVar = letters[Math.floor(Math.random()* letters.length)];
computerGuess.push(compGuessVar);
console.log(computerGuess[0])
} else if ((userGuess !== computerGuess[0]) && (attempts > 0)) {
attempts--;

} else {
    lossesTotal++;
    attempts = 9
    usedLetters.length = 0
    var compGuessVar = letters[Math.floor(Math.random()* letters.length)];
computerGuess.push(compGuessVar)
    document.getElementById("losses").push(compGuessVar);
    document.getElementById("wins").append(winsTotal);
    document.getElementbyId("losses").append(lossesTotal);
    document.getElementById("guessthusfar").append(usedLetters);
    userGuess.textContent("Your Guesses: " + userGuess);
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