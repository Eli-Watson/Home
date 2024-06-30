async function displayDailyThought() {
    const thoughtContainer = document.getElementById('thought-text');
    
    // Fetch shower thoughts from JSON file
    const showerThoughts = await fetchShowerThoughts();

    if (showerThoughts.length > 0) {
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().slice(0, 10);

        // Calculate an index based on the current date
        const thoughtIndex = Math.abs(today.hashCode()) % showerThoughts.length;

        thoughtContainer.textContent = showerThoughts[thoughtIndex];
    } else {
        thoughtContainer.textContent = 'No thoughts available.';
    }
}

// Extend Date prototype to add a simple hashCode method
Date.prototype.hashCode = function() {
    return this.getTime(); // Using timestamp for simplicity
}

// Function to fetch shower thoughts from JSON file
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

// Initialize with today's thought on page load
displayDailyThought();
