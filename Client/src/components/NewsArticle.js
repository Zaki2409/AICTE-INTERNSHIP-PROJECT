import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, description, date, image, source }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
        <small className="news-card-source">Source: {source}</small>
        <small className="news-card-date">{new Date(date).toLocaleDateString()}</small>
      </div>
    </div>
  );
};

export default NewsArticle;
