document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNav");
    const sideNav = document.querySelector("nav.sidenav");

    toggleNavButton.addEventListener("click", function() {
        sideNav.classList.toggle("hidden");
    });
});
