document.addEventListener("DOMContentLoaded", function() {
    // Check if a word is already stored for today
    const storedWord = localStorage.getItem('wordOfTheDay');
    
    if (storedWord) {
        // If a word is stored, display it
        displayWord(JSON.parse(storedWord));
    } else {
        // Fetch the words from JSON file
        fetch('words.json')
            .then(response => response.json())
            .then(data => {
                // Select a random word from the array
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomWord = data[randomIndex];

                // Store the selected word in localStorage with today's date
                localStorage.setItem('wordOfTheDay', JSON.stringify(randomWord));

                // Display the word and definition on the page
                displayWord(randomWord);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});

function displayWord(wordObj) {
    // Display the word and definition on the page
    document.getElementById('word').textContent = wordObj.word;
    document.getElementById('definition').textContent = wordObj.definition;
}

