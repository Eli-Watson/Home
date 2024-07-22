document.addEventListener('DOMContentLoaded', function() {
    const accentColorInput = document.getElementById('accent-color');
    const resetButton = document.getElementById('reset-color');
    
    // Load saved customization from localStorage if available
    const savedAccentColor = localStorage.getItem('accentColor');
    if (savedAccentColor) {
        accentColorInput.value = savedAccentColor;
        updateAccentColor(savedAccentColor);
    }
    
    // Listen for changes in the accent color input
    accentColorInput.addEventListener('input', function() {
        const newAccentColor = accentColorInput.value;
        updateAccentColor(newAccentColor);
        
        // Save customization to localStorage
        localStorage.setItem('accentColor', newAccentColor);
    });
    
    // Reset button functionality
    resetButton.addEventListener('click', function() {
        const defaultAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim();
        accentColorInput.value = defaultAccentColor;
        updateAccentColor(defaultAccentColor);
        
        // Remove accentColor from localStorage
        localStorage.removeItem('accentColor');
    });
    
    // Function to update accent color across the page
    function updateAccentColor(color) {
        document.documentElement.style.setProperty('--accent-color', color);
    }
});
