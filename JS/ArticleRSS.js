document.addEventListener('DOMContentLoaded', () => {
    const rssUrl = 'https://eli-watson.github.io/articles/index.xml';
    const rssList = document.getElementById('rss-list');

    fetch(rssUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const items = Array.from(xml.querySelectorAll('item'));

            // Sort items by publication date, newest first
            items.sort((a, b) => {
                const dateA = new Date(a.querySelector('pubDate').textContent);
                const dateB = new Date(b.querySelector('pubDate').textContent);
                return dateB - dateA;
            });

            items.forEach((item) => {
                const title = item.querySelector('title').textContent;
                const description = item.querySelector('description').textContent;
                const link = item.querySelector('link').textContent;
                const pubDate = item.querySelector('pubDate').textContent;

                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${new Date(pubDate).toLocaleDateString()}</strong> - ${title}`;
                listItem.addEventListener('click', () => {
                    window.location.href = `/Home/RSS/Articles.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&link=${encodeURIComponent(link)}`;
                });

                rssList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
});
