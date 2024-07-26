function changeToBlack() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    // Save the chosen theme to localStorage
    localStorage.setItem('theme', 'black');
    console.log('Black theme');
}

function changeToWhite() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    // Save the chosen theme to localStorage
    localStorage.setItem('theme', 'white');
    console.log('White theme');
}

// Check if a theme is stored in localStorage and apply it when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'black') {
        changeToBlack();
        console.log('Changing theme to Black');
    } else if (theme === 'white') {
        changeToWhite();
        console.log('Changing theme to White')
    }
document.addEventListener('Holiday.jsLoaded', function() {
    console.log('Holiday.js Loaded');
    
  });
  

});
 