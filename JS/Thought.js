// Thought.js

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

    async function displayDailyThought() {
        const thoughtContainer = document.getElementById('thought-text');

        if (thoughtContainer) {
            const showerThoughts = await fetchShowerThoughts();

            if (showerThoughts.length > 0) {
                const today = new Date().toISOString().slice(0, 10);
                const thoughtIndex = Math.abs(hashCode(today)) % showerThoughts.length;
                thoughtContainer.textContent = showerThoughts[thoughtIndex];
            } else {
                thoughtContainer.textContent = 'No thoughts available.';
            }
        } else {
            console.error('Element with ID "thought-text" not found.');
        }
    }

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

    // Function to check if the thought needs to be updated
    function checkAndUpdateThought() {
        const lastUpdateDate = localStorage.getItem('lastUpdateDate');
        const today = new Date().toISOString().slice(0, 10);

        if (lastUpdateDate !== today) {
            displayDailyThought();
            localStorage.setItem('lastUpdateDate', today);
        }
    }

    // Initial check and update
    checkAndUpdateThought();

    // Set up an interval to check and update every hour
    setInterval(checkAndUpdateThought, 3600000); // 3600000 ms = 1 hour
});