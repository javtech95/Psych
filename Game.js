// Variables for Score and Array of alphabet to be used by computer.
var userWins = 0;
var userLosses = 0;
var userGuessLeft = 9;
//Global variable used for displaying the user guesses in browser;
var guess = '';
var compChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Global variable set for computer guess to be constant throughout 9 guesses;
var compGuess = '';
var guessedLetters;
guessedLetters = [];

// Function that allows user to utilize keyboard;
document.onkeyup = function (event) {
    //Variable used to identify keys being pushed as User's Guess;
    var userGuess = event.key;


    //check to see if the user has already selected a letter that is already guessed.
    console.log(guessedLetters, userGuess);
    if (guessedLetters.indexOf(userGuess) === 1) {
        // noinspection JSAnnotator
        alert(`you already guessed ${userGuess}`);
        return;

    }

    //push the user Guess into an array.  We have to do this after we check to see if a letter is an array because if the code is before the logic check,
    //then the letter exists in the array and the if evaulates to true every time.
    guessedLetters.push(userGuess);


    // Statement set to choose a random letter every time the amount of guesses left = 9;
    if (userGuessLeft === 9) {
        //Variable for randomly generated selection of a particular object within the array;
        compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];

    }

    // Statement with condition that wins and restarts the game;
    if (userGuess === compGuess) {
        userWins += 1;
        userGuessLeft = 9;
        guess = '';
        document.getElementById("wins").innerHTML = "Wins: " + userWins;
        document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessLeft;
        document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
    }

    // Statement with conditions that tire out amount of guesses left (9);
    else if ((userGuess !== compGuess) && (userGuessLeft > 1)) {
        userGuessLeft -= 1;
        //variable which was empty at start now is implemented below with storing capability;
        guess = guess + userGuess + ", ";
        document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessLeft;
        document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guess;
    }

    //When all other conditions are false, this is true;
    //A Loss is gained and the game restarts;
    else {
        userLosses += 1;
        userGuessLeft = 9;
        guess = '';
        document.getElementById("losses").innerHTML = "Losses: " + userLosses;
        document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + userGuessLeft;
        document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
        reset();

    }
}

function reset() {
    guessesLeft = 9;
    guessedLetters = [];
}

/* Alerts used for testing to see if compGuess was constant throughout 9 guesses
    alert(`User guess: ${userGuess}`);
      alert(`Computer guess: ${compGuess}`); */