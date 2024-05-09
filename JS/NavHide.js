// Get the navigation bar element
var navBar = document.querySelector('nav.sidenav');

// Get the section element
var section = document.querySelector('section');

// Function to toggle the visibility of the navigation bar and center the content
function toggleNavBar() {
    // Toggle the 'hidden' class to hide/show the navigation bar
    navBar.classList.toggle('hidden');

    // Check if the navigation bar is hidden
    if (navBar.classList.contains('hidden')) {
        // If hidden, center the content by changing margin-left to auto
        section.style.marginLeft = 'auto';
    } else {
        // If not hidden, reset margin-left to 200px
        section.style.marginLeft = '200px';
    }
}

// Add event listener to the navigation bar toggle button or element
navBar.addEventListener('click', toggleNavBar);
