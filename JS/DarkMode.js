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

function changeholidaytoblack() {
    var stylesheets = document.styleSheets;

    for (var i = 0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules || stylesheets[i].rules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === '.HolidayText') {
                rules[j].style.color = 'black'; // Change color to black
                return; // Exit after changing the first found rule
            }
        }
    }
}
function changeholidaytowhite() {
    var stylesheets = document.styleSheets;

    for (var i = 0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules || stylesheets[i].rules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === '.HolidayText') {
                rules[j].style.color = 'White'; // Change color to White
                return; // Exit after changing the first found rule
            }
        }
    }
}
// Check if a theme is stored in localStorage and apply it when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'black') {
        changeToBlack();
        console.log('Changing theme to Black');
    } else if (theme === 'white') {
        changeToWhite();
        console.log('Changing theme to White');
    }
});

// Handling a custom event for when the 'Holiday.js' script is loaded
document.addEventListener('HolidayLoaded', function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'black') {
        changeholidaytoblack();
        console.log('Changing Holiday Class to Black');
    } else if (theme === 'white') {
        changeholidaytoblack();
        console.log('Changing Holiday Class to White');
        // Apply the white theme to elements related to 'Holiday.js'
    }
    console.log('Holiday.js Loaded');
});
