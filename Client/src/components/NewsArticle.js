import React from 'react';

const NewsArticle = ({ title, description, date, image, source, author, url }) => {
  return (
    <div className="news-article">
      <h2>{title}</h2>
      <p><strong>Source:</strong> {source}</p>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
      <p><strong>Published on:</strong> {new Date(date).toLocaleString()}</p>
      {image && <img src={image} alt={title} />}
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsArticle;
