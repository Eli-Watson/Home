function toggleNavBar() {
    console.log("Toggle button clicked");
    // Get the navigation bar element
    var navBar = document.querySelector('nav.sidenav');

    // Get the section element
    var section = document.querySelector('section');

    // Toggle the 'hidden' class to hide/show the navigation bar
    navBar.classList.toggle('hidden');

    // Check if the viewport is mobile
    if (window.innerWidth <= 768) {
        // Always set margin-left to auto on mobile
        section.style.marginLeft = 'auto';
    } else {
        // Check if the navigation bar is hidden
        if (navBar.classList.contains('hidden')) {
            // If hidden, center the content by changing margin-left to auto
            section.style.marginLeft = 'auto';
        } else {
            // If not hidden, reset margin-left to 200px
            section.style.marginLeft = '150px';
        }
    }
}