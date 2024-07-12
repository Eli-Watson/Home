// Function to handle login
function checkLogin(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // List of valid usernames and passwords
    var credentials = {
        "Admin": { password: "Wordpass", uid: null },
        "User": { password: "Password", uid: null },
        "Jace": { password: "Disorder", uid: null }
    };

    // Check if username and password match
    if (credentials.hasOwnProperty(username) && credentials[username].password === password) {
        // Generate a unique identifier (UID) if not already set
        if (!credentials[username].uid) {
            credentials[username].uid = generateUID();
        }
        
        // Store the UID in sessionStorage for this session
        sessionStorage.setItem('uid', credentials[username].uid);

        // Redirect to different URLs based on the username
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

// Function to generate a unique identifier
function generateUID() {
    return '_' + Math.random().toString(36).substr(2, 9); // Example of simple UID generation
}

// Function to handle logout
function logout() {
    var username = getUsernameFromUID();
    if (username) {
        // Clear the UID for the user
        credentials[username].uid = null;
    }
    // Remove the UID from sessionStorage
    sessionStorage.removeItem('uid');
    // Redirect to login page
    window.location.href = "/path/to/login.html";
}

// Function to get username from stored UID
function getUsernameFromUID() {
    var uid = sessionStorage.getItem('uid');
    for (var user in credentials) {
        if (credentials.hasOwnProperty(user) && credentials[user].uid === uid) {
            return user;
        }
    }
    return null; // Return null if no matching username found
}
