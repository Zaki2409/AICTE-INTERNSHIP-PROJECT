import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password
            });
            const { token } = response.data;

            // Save token to localStorage or secure cookies
            localStorage.setItem('authToken', token);

            // Redirect to home page after successful login
            navigate('/home');
        } catch (error) {
            setError('Invalid email or password');
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <button onClick={() => navigate('/signup')}>Signup</button></p>
            </div>
        </div>
    );
};

export default Login;
