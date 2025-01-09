import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route with Navbar */}
        <Route 
          path="/home" 
          element={
            <>
              <Navbar />
              <Home />
            </>
          } 
        />

        {/* News Route with Navbar */}
        <Route 
          path="/news" 
          element={
            <>
              <Navbar />
              <News />
            </>
          } 
        />

        {/* Signup and Login Routes without Navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
