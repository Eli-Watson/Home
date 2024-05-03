const words = ['hangman', 'javascript', 'programming', 'computer', 'internet', 'algorithm', 'website', 'openai'];

let wordToGuess = '';
let guessedWord = [];
let guessesLeft = 6;
let lettersGuessed = [];

function initializeGame() {
    wordToGuess = words[Math.floor(Math.random() * words.length)];
    guessedWord = new Array(wordToGuess.length).fill('_');
    guessesLeft = 6;
    lettersGuessed = [];

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('wordToGuess').innerText = guessedWord.join(' ');
    document.getElementById('guessesLeftValue').innerText = guessesLeft;
    document.getElementById('letters').innerText = lettersGuessed.join(' ');
}

function checkGuess(letter) {
    if (lettersGuessed.includes(letter)) {
        document.getElementById('message').innerText = 'You already guessed that letter!';
        return;
    }

    lettersGuessed.push(letter);
    if (!wordToGuess.includes(letter)) {
        guessesLeft--;
        document.getElementById('message').innerText = 'Incorrect guess!';
    } else {
        document.getElementById('message').innerText = 'Correct guess!';
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    }

    updateDisplay();

    if (guessesLeft === 0) {
        endGame(false);
    } else if (!guessedWord.includes('_')) {
        endGame(true);
    }
}

function endGame(win) {
    if (win) {
        document.getElementById('message').innerText = 'Congratulations! You won!';
    } else {
        document.getElementById('message').innerText = `You lost! The word was "${wordToGuess}".`;
    }
    document.querySelectorAll('#letters button').forEach(button => button.disabled = true);
}

function resetGame() {
    initializeGame();
    document.getElementById('message').innerText = '';
    document.querySelectorAll('#letters button').forEach(button => button.disabled = false);
}

initializeGame();
