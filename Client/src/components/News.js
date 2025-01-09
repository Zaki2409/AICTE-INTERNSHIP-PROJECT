import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <NewsArticle
          key={index}
          title={article.title}
          description={article.description}
          date={article.publishedAt}
          image={article.urlToImage}
          source={article.source.name}
        />
      ))}
    </div>
  );
};

export default News;