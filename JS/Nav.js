document.addEventListener('DOMContentLoaded', function() {
    fetch('/Home/Pages/Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Nav').innerHTML = data;
        });
    fetch('/Home/Pages/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Footer').innerHTML = data;
        });
    });
