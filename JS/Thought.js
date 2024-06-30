// Thought.js

// Function to fetch shower thoughts from JSON file
document.addEventListener('DOMContentLoaded', function() {
async function fetchShowerThoughts() {
    try {
        const response = await fetch('shower_thoughts.json');
        if (!response.ok) {
            throw new Error('Failed to fetch shower thoughts');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching shower thoughts:', error);
        return [];
    }
}

// Function to generate and display a random thought
async function displayDailyThought() {
    const thoughtContainer = document.getElementById('thought-text');

    if (thoughtContainer) { // Check if element exists
        // Fetch shower thoughts from JSON file
        const showerThoughts = await fetchShowerThoughts();

        if (showerThoughts.length > 0) {
            // Get today's date in YYYY-MM-DD format
            const today = new Date().toISOString().slice(0, 10);

            // Use a stable method to get an index based on the date
            const thoughtIndex = Math.abs(hashCode(today)) % showerThoughts.length;

            thoughtContainer.textContent = showerThoughts[thoughtIndex];
        } else {
            thoughtContainer.textContent = 'No thoughts available.';
        }
    } else {
        console.error('Element with ID "thought-text" not found.');
    }
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

// Initialize with today's thought on page load
displayDailyThought();
});
