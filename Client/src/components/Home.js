import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle Learn More button click
  const handleLearnMore = () => {
    navigate('/news'); // Navigate to /news
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our News Platform</h1>
        <p>Empowering your knowledge with cutting-edge information</p>
        <button className="cta-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Innovative Solutions</h2>
          <p>Discover tailored solutions to drive your success.</p>
        </div>
        <div className="feature">
          <h2>Expert Support</h2>
          <p>Access our team of professionals anytime, anywhere.</p>
        </div>
        <div className="feature">
          <h2>Trusted by Many</h2>
          <p>Join a growing community of satisfied users worldwide.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
