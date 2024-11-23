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
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    //Clear the list
    guessedLettersList.innerHTML ="";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    console.log(revealWord);
    wordInProgressGuess.innerText= revealWord.join("");
    checkIfWin();
};

const checkIfWin = function() {
    if (word.toUpperCase() === wordInProgressGuess.innerText) {
        paragraphLetterGuess.classList.add("win");
        paragraphLetterGuess.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};