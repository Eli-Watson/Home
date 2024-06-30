document.addEventListener("DOMContentLoaded", function() {
    // Check if a word is already stored for today
    const storedWord = localStorage.getItem('wordOfTheDay');

    if (storedWord) {
        // If a word is stored for today, display it
        displayWord(JSON.parse(storedWord));
    } else {
        // Fetch the words from JSON file
        fetchWordOfTheDay();
    }
});

async function fetchWordOfTheDay() {
    try {
        const response = await fetch('words.json');
        if (!response.ok) {
            throw new Error('Failed to fetch words');
        }
        const data = await response.json();
        
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().slice(0, 10);
        
        // Use a stable method to get an index based on the date
        const wordIndex = Math.abs(hashCode(today)) % data.length;
        
        // Select the word object based on the calculated index
        const wordOfTheDay = data[wordIndex];
        
        // Store the selected word in localStorage with today's date
        localStorage.setItem('wordOfTheDay', JSON.stringify(wordOfTheDay));
        
        // Display the word and definition on the page
        displayWord(wordOfTheDay);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWord(wordObj) {
    // Display the word and definition on the page
    document.getElementById('word').textContent = wordObj.word;
    document.getElementById('definition').textContent = wordObj.definition;
}

// Hash function to generate a stable index based on date string
function hashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}