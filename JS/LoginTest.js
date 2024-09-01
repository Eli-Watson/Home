// Variable to set whether or not to send a notification when the user logs in
let notifyonlogin = true;

// Function for login on HTML page login for Eli Watson Home.
function checkLogin(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // List of valid usernames and passwords
    var credentials = {
        "Admin": "Wordpass",
        "User": "Password",
        "Jace": "Disorder"
    };

    // Check if username and password match
    if (credentials.hasOwnProperty(username) && credentials[username] === password) {
        // Send notification if enabled
        if (notifyonlogin === true) {
            SendAlert();
        }
        // Redirect based on the username
        switch (username) {
            case "Admin":
                window.location.href = "/Home/Users/AdminHomePage.html"; 
                break;
            case "User":
                window.location.href = "/Home/Users/UserHomePage.html"; 
                break;
            case "Jace":
                window.location.href = "/Home/Users/JaceHomePage.html"; 
                break;
            default:
                alert("Invalid username or password. Try again or maybe don't guess this time.");
                return false;
        }
    } else {
        alert("Invalid username or password. Maybe don't guess this time.");
        return false;
    }

    // Prevent default form submission behavior
    event.preventDefault();
}

function SendAlert() {
    console.log("Sending fetch request..."); // Debugging
    fetch('https://ntfy.sh/NostawTest', {
        method: 'POST',
        body: 'Someone has logged into the IIC page on your site.',
        headers: {
            'Title': 'Activity on IIC Login Page',
            'Actions': 'view, Go to Page, https://eli-watson.github.io/Home/IIC/Home.html'
        }
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to send notification:', response.statusText);
        } else {
            console.log('Notification sent successfully!');
        }
    })
    .catch(error => {
        console.error('Error sending notification:', error);
    });
}