function changeToBlack() {
    document.body.style.backgroundColor = "#444";
    document.body.style.color = "#fff";
    // Save the chosen theme to localStorage
    localStorage.setItem('theme', 'black');
}

function changeToWhite() {
    document.body.style.backgroundColor = "#fff"; 
    document.body.style.color = "#000";
    // Save the chosen theme to localStorage
    localStorage.setItem('theme', 'white');
}

function changeholidaytoblack() {
    var stylesheets = document.styleSheets;

    for (var i = 0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules || stylesheets[i].rules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === '.HolidayText' || rules[j].selectorText === '.Slogan') {
                rules[j].style.color = 'black'; // Change color to black
            }
        }
    }
}
function changeholidaytowhite() {
    var stylesheets = document.styleSheets;

    for (var i = 0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules || stylesheets[i].rules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === '.HolidayText' || rules[j].selectorText === '.Slogan') {
                rules[j].style.color = 'white'; // Change color to black
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
        console.log('Changing Holiday theme to Black');
    } else if (theme === 'white') {
        changeholidaytoblack();
        console.log('Changing Holiday theme to White');
        // Apply the white theme to elements related to 'Holiday.js'
    }
});
