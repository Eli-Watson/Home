document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const link = urlParams.get('link');

    const decodedTitle = decodeURIComponent(title);
    const decodedDescription = decodeURIComponent(description);
    const decodedLink = decodeURIComponent(link);

    document.getElementById('article-title').textContent = decodedTitle;
    document.getElementById('article-description').innerHTML = decodedDescription; // Use innerHTML to preserve HTML formatting
    document.getElementById('article-link').href = decodedLink;
});
