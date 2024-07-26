document.addEventListener('DOMContentLoaded', function() {
    const accentColorInput = document.getElementById('accent-color');
    const headerColorInput = document.getElementById('header-color');
    const resetButton = document.getElementById('reset-color');
    
    // Function to update colors across the page
    function updateColor(property, color) {
        document.documentElement.style.setProperty(property, color);
    }

    // Load saved customization from localStorage if available
    const savedAccentColor = localStorage.getItem('accentColor');
    const savedHeaderColor = localStorage.getItem('headerColor');

    if (savedAccentColor) {
        updateColor('--accent-color', savedAccentColor);
        if (accentColorInput) {
            accentColorInput.value = savedAccentColor;
        }
    }

    if (savedHeaderColor) {
        updateColor('--header-color', savedHeaderColor);
        if (headerColorInput) {
            headerColorInput.value = savedHeaderColor;
        }
    }
    
    // Listen for changes in the accent color input, if it exists
    if (accentColorInput) {
        accentColorInput.addEventListener('input', function() {
            const newAccentColor = accentColorInput.value;
            updateColor('--accent-color', newAccentColor);
            
            // Save customization to localStorage
            localStorage.setItem('accentColor', newAccentColor);
        });
    }

    // Listen for changes in the header color input, if it exists
    if (headerColorInput) {
        headerColorInput.addEventListener('input', function() {
            const newHeaderColor = headerColorInput.value;
            updateColor('--header-color', newHeaderColor);
            
            // Save customization to localStorage
            localStorage.setItem('headerColor', newHeaderColor);
        });
    }
    
    // Reset button functionality, if it exists
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const defaultAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim();
            const defaultHeaderColor = getComputedStyle(document.documentElement).getPropertyValue('--default-header-color').trim();

            updateColor('--accent-color', defaultAccentColor);
            updateColor('--header-color', defaultHeaderColor);

            if (accentColorInput) {
                accentColorInput.value = defaultAccentColor;
            }

            if (headerColorInput) {
                headerColorInput.value = defaultHeaderColor;
            }
            
            // Remove colors from localStorage
            localStorage.removeItem('accentColor');
            localStorage.removeItem('headerColor');
        });
    }
    
    // Listen for storage event to update the color across tabs/pages
    window.addEventListener('storage', function(event) {
        if (event.key === 'accentColor') {
            const newAccentColor = event.newValue;
            if (newAccentColor) {
                updateColor('--accent-color', newAccentColor);
                if (accentColorInput) {
                    accentColorInput.value = newAccentColor;
                }
            } else {
                const defaultAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim();
                updateColor('--accent-color', defaultAccentColor);
                if (accentColorInput) {
                    accentColorInput.value = defaultAccentColor;
                }
            }
        }
        
        if (event.key === 'headerColor') {
            const newHeaderColor = event.newValue;
            if (newHeaderColor) {
                updateColor('--header-color', newHeaderColor);
                if (headerColorInput) {
                    headerColorInput.value = newHeaderColor;
                }
            } else {
                const defaultHeaderColor = getComputedStyle(document.documentElement).getPropertyValue('--default-header-color').trim();
                updateColor('--header-color', defaultHeaderColor);
                if (headerColorInput) {
                    headerColorInput.value = defaultHeaderColor;
                }
            }
        }
    });
});
