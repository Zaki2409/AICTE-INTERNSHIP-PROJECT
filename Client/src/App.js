import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/news" element={<ProtectedRoute element={<News />} />} />
            </Routes>
        </Router>
    );
}

export default App;
