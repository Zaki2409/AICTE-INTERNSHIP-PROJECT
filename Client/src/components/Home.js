import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Detail about feature 1.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Detail about feature 2.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Detail about feature 3.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;