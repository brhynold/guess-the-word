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
const guessedLetters = [];

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
//Clear message paragraph
paragraphLetterGuess.innerText="";
const guess = guessLetterInput.value;

const goodGuess= validateInput(guess);
guessLetterInput.value ="";
if (goodGuess) {
    makeGuess(guess);
}
});

//Validate that input is not null, is a letter, and is only a single letter
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; 
    if (input.length === 0) {
       paragraphLetterGuess.innerText = "Whoops, you forgot to enter a letter!";
    } else if (input.length >1) {
        paragraphLetterGuess.innerText = "Whoops, only enter a single letter!";
    } else if (!input.match(acceptedLetter)) {
        paragraphLetterGuess.innerText ="Whoops, only enter letters from A to Z!";
    } else {
        return input;
    }
        
    };
const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        paragraphLetterGuess.innerText = "Whoops, you already guessed that letter! Try again :)";

    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}