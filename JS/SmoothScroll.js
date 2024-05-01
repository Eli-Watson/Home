// JavaScript code for smooth page scroll to top button
document.addEventListener('DOMContentLoaded', function() {
  var scrollButton = document.getElementById("scrollToTopButton");
  scrollButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
