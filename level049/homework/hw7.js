const button = document.getElementById("guessBtn");
const result = document.getElementById("result");

function guessTheNumber() {
    const secretNumber = 50;

    const userNumber = Number(
        prompt("Guess the number:")
    );

    if (userNumber > secretNumber) {
        result.textContent = "The number is too high";
    } else if (userNumber < secretNumber) {
        result.textContent = "The number is too low";
    } else {
        result.textContent =
            "Congratulations You have guessed the secret number!";
    }
}

button.addEventListener("click", guessTheNumber);