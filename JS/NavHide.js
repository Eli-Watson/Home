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

// code to change the syle of the nav bar
function SetNavTop() {
    let nav = document.getElementById('sidenav');
        if (nav) {
            nav.id = 'topnav'; // Change the ID of the div
        }
        // change local storage
    localStorage.setItem('nav', 'top');
    console.log("Changing nav to top");
        // location.reload();
    }
    
function SetNavSide() {
    let nav = document.getElementById('topnov');
    if (nav) {
        nav.id = 'sidenav'; // Change the ID of the div
    }
    localStorage.setItem('nav', 'side');
    console.log("Changing nav to side");
    // location.reload();
    }