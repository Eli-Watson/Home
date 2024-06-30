document.addEventListener('DOMContentLoaded', function() {
    fetch('/Home/Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Nav').innerHTML = data;
        });
});