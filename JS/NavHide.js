document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNav");
    const sideNav = document.querySelector("nav.sidenav");
    const section = document.getElementById('section');
    let isNavHidden = false;

    toggleNavButton.addEventListener("click", function() {
        isNavHidden = !isNavHidden;
        sideNav.classList.toggle("hidden");
        
        if (isNavHidden) {
            section.style.marginLeft = '0'; // Set margin when sidebar is hidden
        } else {
            section.style.marginLeft = '200px'; // Reset margin when sidebar is visible
        }
    });
});

