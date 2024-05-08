document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNav");
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
            section.style.marginLeft = '200px'; // Set margin when sidebar is hidden
        } else {
            section.style.marginLeft = '0'; // Reset margin when sidebar is visible
        }
    }

    // Activate script if device is a mobile phone
    if (isMobileDevice()) {
        toggleNavAndMargin();
    }

    // Event listener for toggle button click
    toggleNavButton.addEventListener("click", toggleNavAndMargin);
});

