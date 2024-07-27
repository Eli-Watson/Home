document.addEventListener('DOMContentLoaded', function() {
    const accentColorInput = document.getElementById('accent-color');
    const headerColorInput = document.getElementById('header-color');
    const backgroundColorInput = document.getElementById('background-color'); // New
    const textColorInput = document.getElementById('text-color'); // New
    const resetButton = document.getElementById('reset-color');

    // Function to update colors across the page
    function updateColor(property, color) {
        document.documentElement.style.setProperty(property, color);
    }

    // Load saved customization from localStorage if available
    const savedAccentColor = localStorage.getItem('accentColor');
    const savedHeaderColor = localStorage.getItem('headerColor');
    const savedBackgroundColor = localStorage.getItem('backgroundColor'); // New
    const savedTextColor = localStorage.getItem('textColor'); // New

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

    if (savedBackgroundColor) { // New
        updateColor('--background-color', savedBackgroundColor);
        if (backgroundColorInput) {
            backgroundColorInput.value = savedBackgroundColor;
        }
    }

    if (savedTextColor) { // New
        updateColor('--text-color', savedTextColor);
        if (textColorInput) {
            textColorInput.value = savedTextColor;
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

    // Listen for changes in the background color input, if it exists
    if (backgroundColorInput) { // New
        backgroundColorInput.addEventListener('input', function() {
            const newBackgroundColor = backgroundColorInput.value;
            updateColor('--background-color', newBackgroundColor);

            // Save customization to localStorage
            localStorage.setItem('backgroundColor', newBackgroundColor);
        });
    }

    // Listen for changes in the text color input, if it exists
    if (textColorInput) { // New
        textColorInput.addEventListener('input', function() {
            const newTextColor = textColorInput.value;
            updateColor('--text-color', newTextColor);

            // Save customization to localStorage
            localStorage.setItem('textColor', newTextColor);
        });
    }

    // Reset button functionality, if it exists
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const defaultAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim();
            const defaultHeaderColor = getComputedStyle(document.documentElement).getPropertyValue('--default-header-color').trim();
            const defaultBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--default-background-color').trim(); // New
            const defaultTextColor = getComputedStyle(document.documentElement).getPropertyValue('--default-text-color').trim(); // New

            updateColor('--accent-color', defaultAccentColor);
            updateColor('--header-color', defaultHeaderColor);
            updateColor('--background-color', defaultBackgroundColor); // New
            updateColor('--text-color', defaultTextColor); // New

            if (accentColorInput) {
                accentColorInput.value = defaultAccentColor;
            }

            if (headerColorInput) {
                headerColorInput.value = defaultHeaderColor;
            }

            if (backgroundColorInput) { // New
                backgroundColorInput.value = defaultBackgroundColor;
            }

            if (textColorInput) { // New
                textColorInput.value = defaultTextColor;
            }

            // Remove colors from localStorage
            localStorage.removeItem('accentColor');
            localStorage.removeItem('headerColor');
            localStorage.removeItem('backgroundColor'); // New
            localStorage.removeItem('textColor'); // New
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

        if (event.key === 'backgroundColor') { // New
            const newBackgroundColor = event.newValue;
            if (newBackgroundColor) {
                updateColor('--background-color', newBackgroundColor);
                if (backgroundColorInput) {
                    backgroundColorInput.value = newBackgroundColor;
                }
            } else {
                const defaultBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--default-background-color').trim();
                updateColor('--background-color', defaultBackgroundColor);
                if (backgroundColorInput) {
                    backgroundColorInput.value = defaultBackgroundColor;
                }
            }
        }

        if (event.key === 'textColor') { // New
            const newTextColor = event.newValue;
            if (newTextColor) {
                updateColor('--text-color', newTextColor);
                if (textColorInput) {
                    textColorInput.value = newTextColor;
                }
            } else {
                const defaultTextColor = getComputedStyle(document.documentElement).getPropertyValue('--default-text-color').trim();
                updateColor('--text-color', defaultTextColor);
                if (textColorInput) {
                    textColorInput.value = defaultTextColor;
                }
            }
        }
    });
});
