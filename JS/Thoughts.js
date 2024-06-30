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

// Function to generate and display a random thought
async function generateThought() {
    const thoughtContainer = document.getElementById('thought-text');
    
    // Fetch shower thoughts from JSON file
    const showerThoughts = await fetchShowerThoughts();

    if (showerThoughts.length > 0) {
        const randomIndex = Math.floor(Math.random() * showerThoughts.length);
        thoughtContainer.textContent = showerThoughts[randomIndex];
    } else {
        thoughtContainer.textContent = 'No thoughts available.';
    }
}

// Initialize with a random thought on page load
generateThought();
