document.addEventListener('DOMContentLoaded', function() {
    const accentColorInput = document.getElementById('accent-color');
    
    // Load saved customization from localStorage if available
    const savedAccentColor = localStorage.getItem('accentColor');
    if (savedAccentColor) {
        document.documentElement.style.setProperty('--accent-color', savedAccentColor);
        accentColorInput.value = savedAccentColor;
    }
    
    // Listen for changes in the accent color input
    accentColorInput.addEventListener('input', function() {
        const newAccentColor = accentColorInput.value;
        document.documentElement.style.setProperty('--accent-color', newAccentColor);
        
        // Save customization to localStorage
        localStorage.setItem('accentColor', newAccentColor);
    });
});
