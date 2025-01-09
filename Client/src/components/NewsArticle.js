import React from 'react';

const NewsArticle = ({ title, description, date, image, source }) => {
  return (
    <div className="news-article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><small>{date}</small></p>
      <p><small>{source}</small></p>
    </div>
  );
};

export default NewsArticle;