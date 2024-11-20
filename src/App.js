import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import Header from './components/Header';
import BikeDetailPage from './components/BikeDetailPage';
import BikeList from './components/display'; // Fixed import
// import ProtectedRoute from './components/ProtectedRoute';  // Uncomment if you have a ProtectedRoute component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/display" element={<BikeList />} />
        <Route path="/bike/:id" element={<BikeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
