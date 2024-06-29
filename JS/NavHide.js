
 function toggleNavBar() {
    console.log("Toggle button clicked");
    // Get the navigation bar element
    var navBar = document.querySelector('nav.sidenav');

    // Get the section element
    var section = document.querySelector('section');

    // Toggle the 'hidden' class to hide/show the navigation bar
    navBar.classList.toggle('hidden');

    // Check if the navigation bar is hidden and the viewport is not mobile
    if (navBar.classList.contains('hidden') && window.innerWidth > 768) {
        // If hidden and not mobile, center the content by changing margin-left to auto
        section.style.marginLeft = 'auto';
    } else if (window.innerWidth > 768) {
        // If not hidden and not mobile, reset margin-left to 200px
        section.style.marginLeft = '200px';
    } else {
        // If on mobile, reset any inline styles
        section.style.marginLeft = '';
    }
}