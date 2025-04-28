// First Request - Health Articles
var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        renderArticles(articles, 'Health');
    } else {
        console.error('Failed to load health articles:', xhr.status);
    }
};
xhr.send();

// Second Request - News Articles
var newsXhr = new XMLHttpRequest();
var newsUrl = './news_article.json';
newsXhr.open('GET', newsUrl, true);
newsXhr.responseType = 'json';

newsXhr.onload = function() {
    if (newsXhr.status === 200) {
        var articles = newsXhr.response.articles;
        renderArticles(articles, 'News');
    } else {
        console.error('Failed to load news articles:', newsXhr.status);
    }
};
newsXhr.send();

// Common rendering function
function renderArticles(articles, type) {
    var articlesDiv = document.getElementById(
        type === 'Health' ? 'articles' : 'news'
    );

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = (type === 'Health') ? 'Ways to Achieve:' : 'Background:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = (type === 'Health') ? 'Benefits:' : 'Current Updates:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}
