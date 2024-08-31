document.addEventListener("DOMContentLoaded", function() {
    checkAndUpdateWord();
    
    // Set up an interval to check and update every hour
    setInterval(checkAndUpdateWord, 3600000); // 3600000 ms = 1 hour
});

function checkAndUpdateWord() {
    const today = new Date().toISOString().slice(0, 10);
    const storedData = localStorage.getItem('wordOfTheDay');

    if (storedData) {
        const { date, wordObj } = JSON.parse(storedData);
        if (date === today) {
            displayWord(wordObj);
            return;
        }
    }

    fetchWordOfTheDay();
}

async function fetchWordOfTheDay() {
    try {
        const response = await fetch('/Home/Database/words.json');
        if (!response.ok) {
            throw new Error('Failed to fetch words');
        }
        const data = await response.json();

        const today = new Date().toISOString().slice(0, 10);

        const wordIndex = Math.abs(hashCode(today)) % data.length;

        const wordOfTheDay = data[wordIndex];

        localStorage.setItem('wordOfTheDay', JSON.stringify({
            date: today,
            wordObj: wordOfTheDay
        }));

        displayWord(wordOfTheDay);
        sendMessage();
    } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally display an error message in the UI
    }
}

function displayWord(wordObj) {
    document.getElementById('word').textContent = wordObj.word;
    document.getElementById('definition').textContent = wordObj.definition;
}

function sendMessage() {
    fetch('https://ntfy.sh/Nostaw', {
        method: 'POST', // PUT works too
       // body: `Word: ${wordObj.word}\nDefinition: ${wordObj.definition}`,
        body: 'testing',
        headers: {
            'Title': 'Word of the Day',
        }
    })
}

function hashCode(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
