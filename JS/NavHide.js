document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNav");
    const toggleScriptButton = document.getElementById("toggleScript");
    const sideNav = document.querySelector("nav.sidenav");
    const section = document.getElementById('section');
    let isNavHidden = false;

    // Function to check if the device is a mobile phone
    function isMobileDevice() {
        return (window.innerWidth <= 768); // Adjust the threshold as needed
    }

    // Function to toggle navigation sidebar and adjust section margin
    function toggleNavAndMargin() {
        isNavHidden = !isNavHidden;
        sideNav.classList.toggle("hidden");
        
        if (isNavHidden) {
            section.style.marginLeft = '0'; // Set margin when sidebar is hidden
        } else {
            section.style.marginLeft = '200px'; // Reset margin when sidebar is visible
        }
    }

    // Activate script if device is a mobile phone
    if (isMobileDevice()) {
        toggleNavAndMargin();
    }

    // Event listener for toggle button click
    toggleNavButton.addEventListener("click", toggleNavAndMargin);

    // Event listener for toggle script button click
    toggleScriptButton.addEventListener("click", function() {
        toggleNavAndMargin();
    });
});

    toggleNavButton.addEventListener("click", toggleNavAndMargin);
});

