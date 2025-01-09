const express = require('express');
const NewsAPI = require('newsapi');
const router = express.Router();
require('dotenv').config(); // Load environment variables

const newsapi = new NewsAPI(process.env.NEWS_API_KEY); // Initialize the NewsAPI with your API key

// Route for fetching news
router.get('/api/news', async (req, res) => {
  try {
    // Fetch top headlines using the newsapi package
    const response = await newsapi.v2.topHeadlines({
      country: 'us', // You can change this to any other country code
      // You can add other parameters here based on your needs, like q, category, etc.
    });
    
    res.json(response); // Return the response from the News API
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

module.exports = router;
