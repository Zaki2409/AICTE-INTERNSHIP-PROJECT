import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the news:', error)); // Added error handling
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
