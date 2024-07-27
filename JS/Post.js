async function fetchArticles(url, containerId, limit) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
    const items = xml.querySelectorAll('item');

    const articles = [];
    items.forEach((item, index) => {
      if (index < limit) { // Only process up to the limit
        const title = item.querySelector('title').textContent;
        const link = item.querySelector('link').textContent;
        articles.push({ title, link });
      }
    });

    const articlesContainer = document.getElementById(containerId);
    articles.forEach(article => {
      const div = document.createElement('div');
      div.classList.add('article');

      const a = document.createElement('a');
      a.href = article.link;
      a.textContent = article.title;

      div.appendChild(a);
      articlesContainer.appendChild(div);
    });
  } catch (error) {
    console.error('Error fetching and parsing articles:', error);
  }
}

// Fetch articles for two different RSS feeds, limiting to the 5 newest items
fetchArticles('https://eli-watson.github.io/articles/index.xml', 'articles-container', 2);
fetchArticles('https://eli-watson.github.io/posts/index.xml', 'post-container', 2);