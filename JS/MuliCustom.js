document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const accentColorInput = document.getElementById('accent-color');
    const headerColorInput = document.getElementById('header-color');
    const resetButton = document.getElementById('reset-color');

    // Function to update color properties across the page
    function updateColors(colors) {
        document.documentElement.style.setProperty('--accent-color', colors.accent);
        document.documentElement.style.setProperty('--header-color', colors.header);
    }

    // Load saved customizations from localStorage if available
    const savedColors = JSON.parse(localStorage.getItem('colors'));
    if (savedColors) {
        updateColors(savedColors);
        if (accentColorInput) accentColorInput.value = savedColors.accent;
        if (headerColorInput) headerColorInput.value = savedColors.header;
    }

    // Listen for changes in color inputs, if they exist
    function handleInputChange() {
        const newColors = {
            accent: accentColorInput ? accentColorInput.value : getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim(),
            header: headerColorInput ? headerColorInput.value : getComputedStyle(document.documentElement).getPropertyValue('--header-color').trim()
        };
        updateColors(newColors);

        // Save customization to localStorage
        localStorage.setItem('colors', JSON.stringify(newColors));
    }

    if (accentColorInput) accentColorInput.addEventListener('input', handleInputChange);
    if (headerColorInput) headerColorInput.addEventListener('input', handleInputChange);

    // Reset button functionality, if it exists
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const defaultColors = {
                accent: getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim(),
                header: getComputedStyle(document.documentElement).getPropertyValue('--default-header-color').trim()
            };
            updateColors(defaultColors);

            if (accentColorInput) accentColorInput.value = defaultColors.accent;
            if (headerColorInput) headerColorInput.value = defaultColors.header;

            // Remove colors from localStorage
            localStorage.removeItem('colors');
        });
    }

    // Listen for storage event to update the colors across tabs/pages
    window.addEventListener('storage', function(event) {
        if (event.key === 'colors') {
            const newColors = JSON.parse(event.newValue);
            if (newColors) {
                updateColors(newColors);
                if (accentColorInput) accentColorInput.value = newColors.accent;
                if (headerColorInput) headerColorInput.value = newColors.header;
            } else {
                const defaultColors = {
                    accent: getComputedStyle(document.documentElement).getPropertyValue('--default-accent-color').trim(),
                    header: getComputedStyle(document.documentElement).getPropertyValue('--default-header-color').trim()
                };
                updateColors(defaultColors);
                if (accentColorInput) accentColorInput.value = defaultColors.accent;
                if (headerColorInput) headerColorInput.value = defaultColors.header;
            }
        }
    });
});
