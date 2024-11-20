// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';  // Use the custom hook to get auth context

const ProtectedRoute = ({ element, ...rest }) => {
    const { token } = useAuth();  // Get token or authentication status from context

    if (!token) {
        return <Navigate to="/" replace />;  // Redirect to login if not authenticated
    }

    return element;  // Render the element if user is authenticated
};

export default ProtectedRoute;
