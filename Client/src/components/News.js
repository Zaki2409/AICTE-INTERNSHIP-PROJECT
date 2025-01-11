import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); // To track the current page
  const [loading, setLoading] = useState(false); // To handle loading state

  useEffect(() => {
    // Fetch the news articles based on the current page
    const fetchNews = () => {
      setLoading(true);
      fetch(`http://localhost:3001/api/news?page=${page}`)
        .then(response => response.json())
        .then(data => {
          setArticles(prevArticles => [...prevArticles, ...data.articles]);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the news:', error);
          setLoading(false);
        });
    };

    fetchNews();
  }, [page]); // Triggered whenever the page number changes

  const loadMoreArticles = () => {
    setPage(prevPage => prevPage + 1); // Increment page number to fetch more articles
  };

  return (
    <div className="news-container">
      <div className="news-grid">
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

      <div className="load-more-container">
        <button
          className="load-more-button"
          onClick={loadMoreArticles}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More News'}
        </button>
      </div>
    </div>
  );
};

export default News;
