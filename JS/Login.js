//Function For login on html page login for Eli Watson Home.
function checkLogin(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // list of valid usernames and passwords
    var credentials = {
        "Admin": "Wordpass",
        "User": "Password",
        "Jace": "Disorder"
    };

    // Check if username and password match
    if (credentials.hasOwnProperty(username) && credentials[username] === password) {
        // Redirect to different URLs based on the username
        switch (username) {
            case "Admin":
                window.location.href = "/Home/Users/AdminHomePage.html";
                SendAlert();
                break;
            case "User":
                window.location.href = "/Home/Users/UserHomePage.html";
                SendAlert();
                break;
            case "Jace":
                window.location.href = "/Home/Users/JaceHomePage.html";
                SendAlert();
                break;
            default:
                alert("Invalid username or password. Try again or maybe don't guess this time.");
                return false;
        }
    } else {
        alert("Invalid username or password. Maby Don't guess this time.");
        return false;
    }

    // Prevent default form submission behavior
    event.preventDefault();
}


// Function to send a notification using ntfy