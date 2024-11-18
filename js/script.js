//Global Variables

const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetterInput = document.querySelector(".letter");
const wordInProgressGuess = document.querySelector(".word-in-progress");
const wordRemainingGuess = document.querySelector(".remaining");
const displayRemainingGuess = document.querySelector(".remaining span");
const paragraphLetterGuess = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word= "magnolia";

const placeholder = function(word) {
   const placeHolderLetters = [];
   for (const letter of word) {
    console.log(letter);
    placeHolderLetters.push("●");
   } 
wordInProgressGuess.innerText = placeholderLetters.join("");
};

guessButton.addEventListener("click", function (e) {
e.preventDefault();
const guess = guessLetterInput.value;
console.log(guess);
guessLetterInput.value ="";
});