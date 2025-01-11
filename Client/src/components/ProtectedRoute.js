import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';

/**
 * ProtectedRoute component to restrict access to authenticated users only.
 * Includes Navbar for authenticated routes.
 * @param {React.ReactNode} element - The component to render if authenticated.
 * @returns {React.ReactNode} - The protected component or a redirect to login.
 */
const ProtectedRoute = ({ element }) => {
    // Retrieve the auth token from localStorage (or other secure storage)
    const authToken = localStorage.getItem('authToken');

    // If the user is not authenticated, redirect to login
    if (!authToken) {
        return <Navigate to="/login" />;
    }

    // If authenticated, display the Navbar and the protected component
    return (
        <>
            <Navbar /> {/* Display Navbar only on protected routes */}
            {element}
        </>
    );
};

export default ProtectedRoute;
