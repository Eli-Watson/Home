let wordToGuess, currentWord, wrongGuesses = 0;
        const maxWrongGuesses = 6; // Added one more for full hangman

        function startGame() {
            let wordInput = document.getElementById('wordToGuessInput').value.trim().toLowerCase();
            if (wordInput.length === 0) {
                alert("Please enter a word or phrase to guess.");
                return;
            }
            wordToGuess = wordInput;
            document.getElementById('wordInput').style.display = 'none';
            document.getElementById('game').style.display = 'block';
            currentWord = Array.from(wordToGuess).map(char => char === ' ' ? ' ' : '_');
            updateWordDisplay();
        }

        function updateWordDisplay() {
            let displayWord = '';
            for (let i = 0; i < currentWord.length; i++) {
                if (wordToGuess[i] === ' ') {
                    displayWord += `<span>&nbsp;</span>`;
                } else {
                    displayWord += `<span class="letter">${currentWord[i]}</span>`;
                }
            }
            document.getElementById('wordToGuess').innerHTML = displayWord;
        }

        function guessLetter() {
            let letterGuessed = document.getElementById('letterInputField').value.trim().toLowerCase();
            document.getElementById('letterInputField').value = '';

            if (!letterGuessed.match(/^[a-zA-Z]$/)) {
                alert("Please enter a single letter.");
                return;
            }

            if (currentWord.includes(letterGuessed)) {
                alert("You've already guessed that letter.");
                return;
            }

            let guessedCorrectly = false;

            if (wordToGuess.includes(letterGuessed)) {
                for (let i = 0; i < wordToGuess.length; i++) {
                    if (wordToGuess[i] === letterGuessed) {
                        currentWord[i] = letterGuessed;
                        guessedCorrectly = true;
                    }
                }
                updateWordDisplay();
                if (currentWord.join('') === wordToGuess) {
                    endGame('Congratulations! You guessed the word.');
                } else {
                    document.getElementById('guessResult').innerText = `Correct guess: ${letterGuessed.toUpperCase()}`;
                }
            } else {
                document.getElementById('wrongLetters').innerHTML += `<span>${letterGuessed.toUpperCase()}</span>`;
                wrongGuesses++;
                drawHangman(wrongGuesses, 'hangman');
                if (wrongGuesses === maxWrongGuesses) {
                    endGame(`You've run out of guesses. The word/phrase was: ${wordToGuess}`);
                } else {
                    document.getElementById('guessResult').innerText = `Incorrect guess: ${letterGuessed.toUpperCase()}`;
                }
            }
        }

        function drawHangman(wrongGuesses, hangmanId) {
            const hangmanParts = [
                `<circle cx="40" cy="50" r="10" stroke="black" stroke-width="2" fill="white" />`,
                `<line x1="40" y1="60" x2="40" y2="90" stroke="black" stroke-width="2" />`,
                `<line x1="40" y1="70" x2="20" y2="80" stroke="black" stroke-width="2" />`,
                `<line x1="40" y1="70" x2="60" y2="80" stroke="black" stroke-width="2" />`,
                `<line x1="40" y1="90" x2="20" y2="110" stroke="black" stroke-width="2" />`,
                `<line x1="40" y1="90" x2="60" y2="110" stroke="black" stroke-width="2" />`,
                `<circle cx="40" cy="65" r="15" stroke="black" stroke-width="2" fill="white" />` // Full head for 6 wrong guesses
            ];

            let hangmanElement = document.getElementById(hangmanId);
            if (hangmanElement) {
                let svg = '<svg height="150" width="80">';
                for (let i = 0; i < wrongGuesses; i++) {
                    svg += hangmanParts[i];
                }
                svg += '</svg>';
                hangmanElement.innerHTML = svg;
            }
        }

        function endGame(message) {
            document.getElementById('result').innerHTML = message;
            document.getElementById('letterInput').style.display = 'none';
            document.getElementById('guessResult').innerText = '';
        }