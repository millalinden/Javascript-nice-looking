// ----------------
// State variables
// ----------------
let randomNumber = Math.floor(Math.random() * 100 + 1);
let formEl = document.querySelector("#guessForm");
let triesLeftEl = document.querySelector("#triesLeft");
let hintEl = document.querySelector("#hint");


let maxTries = 5;
let numberOfTries = 0; // start the number of tries to 0

// ----------------
// Logic
// ----------------

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    let userValueEl = document.querySelector("#userValue");
    let userGuess = parseInt(userValueEl.value);

    if (userGuess === randomNumber) {
        renderMessage = "Congratulations, you guessed the right number";
        hintEl.classList.add("hint--correct");
        formEl.style.display = "none"; // Hide the form when the game is won
        triesLeftEl.style.display = "none"; // Hide remaining tries


    } else if (userGuess < randomNumber) {
        renderMessage("Too low! Try again!");
        hintEl.classList.add("hint--incorrect");

        hintEl.addEventListener('transitionend', function () {
        hintEl.classList.remove("hint--incorrect");
    }, { once: true });

    } else if (userGuess > randomNumber) {
        renderMessage("Too high! Try again!");
        hintEl.classList.add("hint--incorrect");

        hintEl.addEventListener('transitionend', function () {
            hintEl.classList.remove("hint--incorrect");
        }, { once: true });
    }

    userValueEl.value = '';

    numberOfTries++; // adds the number of tries

    if (numberOfTries >= maxTries) {
        renderMessage("Sorry, you've run out of attempts. The correct number was " + randomNumber + ". Reload the page to play again!");
        formEl.style.display = "none"; // Hide the form when out of attempts
        triesLeftEl.style.display = "none";
    } else {
        triesRemaining(); // Calls the function to update remaining tries
    }
});


function renderMessage(hint) {
    hintEl.innerHTML = hint;
}

function triesRemaining() {
    triesLeftEl.innerHTML = "Tries left: " + (maxTries - numberOfTries);
}
    
