function toggleNavBar() {
    // Get the navigation bar element
    var navBar = document.querySelector('nav#sidenav, nav#topnav');

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
    // Change local storage
    localStorage.setItem('nav', 'top');
    console.log("Changing nav to top");
}

function SetNavSide() {
    let nav = document.getElementById('topnav'); // 
    if (nav) {
        nav.id = 'sidenav'; // Change the ID of the div
    }
    localStorage.setItem('nav', 'side');
    console.log("Changing nav to side");
}

document.addEventListener('DOMContentLoaded', function() {
    var nav = localStorage.getItem('nav');
    console.log('Current nav from storage: ', nav);
    if (nav === 'top') {
        SetNavTop();
    } else if (nav === 'side') {
        SetNavSide();
    }
});

     