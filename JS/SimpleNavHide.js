

function toggleNavBar() {

    // Get the navigation bar element
    var navBar = document.querySelector('nav.sidenav');

    // Exit early if navBar is not found
    if (!navBar) {
        console.log("Navigation bar not found. Exiting toggleNavBar function.");
        return;
    }

    // Get the section element
    var section = document.querySelector('section');

    // Get the footer element
    var footer = document.querySelector('footer');

    // Toggle the 'hidden' class to hide/show the navigation bar
    navBar.classList.toggle('hidden');

    // Check if the viewport is mobile (less than or equal to 768px)
    if (window.innerWidth <= 768) {
        // Always set margin-left to auto on mobile
        section.style.marginLeft = 'auto';
        footer.style.marginLeft = 'auto';
    } else {
        // Check if the navigation bar is hidden or visible
        if (navBar.classList.contains('hidden')) {
            // If hidden, set margin-left to auto for both section and footer
            section.style.marginLeft = 'auto';
            footer.style.marginLeft = 'auto';
        } else {
            // If not hidden, set margin-left to 150px for both section and footer
            section.style.marginLeft = '150px';
            footer.style.marginLeft = '150px';
        }
    }
}
