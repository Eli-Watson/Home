function toggleNavBar() {

    // Get the navigation bar element
    var navBar = document.querySelector('nav.sidenav');

    // Exit early if navBar is not found
    if (!navBar) {
        console.log("Navigation bar not found. Exiting toggleNavBar function.");
        return;
    }

    // Toggle the 'hidden' class to hide/show the navigation bar
    navBar.classList.toggle('hidden');
}
